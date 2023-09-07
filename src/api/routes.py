"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from api.models import db, User, Park, Coaster
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def signup():
    '''
    POST
    {
        "email": string,
        "username": string,
        "password": string
    }
    '''
    data = request.json
    print(data)
    user = User.query.filter_by(email=data.get("email", None)).first()

    if user:
        return jsonify(message="This user already exists. Get outta here!"), 400
    
    user = User(
        email=data["email"],
        password=data["password"],
        username=data["username"]
    )
    db.session.add(user)
    db.session.commit()
    return '', 204

@api.route('/login', methods=['POST'])
def login():
    '''
    POST
    {
        "email": string,
        "password": string
    }
    '''
    data = request.json
    print(data)
    user = User.query.filter_by(email=data.get("email", None)).first()

    if not user or not user.check_password(data.get("password", None)):
        return jsonify(message="Invalid Credentials"), 401

    token = create_access_token(user.email)
    return jsonify(token=token), 200

@api.route('/parks', methods=['GET'])
def get_all_parks():
    parks = Park.query.all()

    return jsonify(
        parks=[park.serialize() for park in parks]
    ), 200

@api.route('/parks/<int:id>', methods=['GET'])
def get_park(id):
    park = Park.query.filter_by(id=id).first()

    return jsonify(park.serialize()), 200

@api.route('/coasters', methods=['GET'])
def get_all_coasters():
    coasters = Coaster.query.all()

    return jsonify(
        coasters=[coaster.serialize() for coaster in coasters]
    ), 200

@api.route('/coasters/<int:id>', methods=['GET'])
def get_coaster(id):
    coaster = Coaster.query.filter_by(id=id).first()

    return jsonify(coaster.serialize()), 200