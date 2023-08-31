"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Park, Coaster
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

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