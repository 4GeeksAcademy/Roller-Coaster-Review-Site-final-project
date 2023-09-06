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

@api.route('/parks', methods=['POST'])
def add_park():
    '''
    POST {
        "park": {
            "name": string (e.g. "Kings Island"),
            "location": string (e.g. "Mason, Ohio, USA"),
            "year_opened": integer (e.g. 1972),
            "coasters": [
                {
                  "name": string ("Adventure Express"),
                  "ride_type": string ("Mine train coaster"),
                  "height": string ("50 feet"),
                  "track_length": string ("1,150 feet"),
                  "max_speed": string ("35 mph"),
                  "manufacturer": string ("Arrow Dynamics"),
                  "year_opened": integer (1991),
                  "inversions": integer (0),
                  "tallest_drop": string ("42 feet"),
                  "drop_angle": string ("50 degrees")
                },
                ...
            ]
        }
    }
    '''
    park = request.json['park']
    #print(post_req)

    parks_with_same_name = Park.query.filter_by(name=park['name']).all()
    if len(parks_with_same_name) > 0:
        print("We have a similarly named park in our db. Let's see if it's the same one.")
        for park in parks_with_same_name:
            if park.serialize()['location'] == park['location']:
                return jsonify("This park is already in the database"), 400

    db.session.merge(Park(
        name=park['name'],
        location=park['location'],
        year_opened=park['year_opened']
    ))
    db.session.commit()
    park_id = Park.query.filter_by(name=park["name"]).first().id

    for coaster in park['coasters']:
        db.session.merge(Coaster(
            name=coaster["name"],
            year_opened=coaster["year_opened"],
            park_id=park_id,
            ride_type=coaster["ride_type"],
            manufacturer=coaster["manufacturer"],
            track_length=coaster["track_length"],
            height=coaster["height"],
            tallest_drop=coaster["tallest_drop"],
            drop_angle=coaster["drop_angle"],
            max_speed=coaster["max_speed"],
            inversions=coaster["inversions"]
        ))
    db.session.commit()

    return jsonify("Park successfully merged!"), 204

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