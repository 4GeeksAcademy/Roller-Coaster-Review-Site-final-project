import json
import click
from api.models import db, User, Park, Coaster

"""
In this file, you can add as many commands as you want using the @app.cli.command decorator
Flask commands are usefull to run cronjobs or tasks outside of the API but sill in integration 
with youy database, for example: Import the price of bitcoin every night as 12am
"""
def setup_commands(app):
    
    """ 
    This is an example command "insert-test-users" that you can run from the command line
    by typing: $ flask insert-test-users 5
    Note: 5 is the number of users to add
    """
    @app.cli.command("insert-test-users") # name of our command
    @click.argument("count") # argument of out command
    def insert_test_users(count):
        print("Creating test users")
        for x in range(1, int(count) + 1):
            user = User()
            user.email = "test_user" + str(x) + "@test.com"
            user.password = "123456"
            user.username = f"User {str(x)}"
            db.session.add(user)
            db.session.commit()
            print("User: ", user.email, " created.")

        print("All test users created")

    @app.cli.command("insert-test-park")
    def insert_test_park():
        with open("./src/api/test-park-data.json", "rt") as test_data:
            park = json.load(test_data)["park"]

            db.session.merge(Park(
                name=park["name"],
                location=park["location"],
                year_opened=park["year_opened"]
            ))

            db.session.commit()

            park_id = Park.query.filter_by(name=park["name"]).first().id
            print(park_id)

            for coaster in park["coasters"]:
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

    @app.cli.command("pop-parks-and-coasters")
    def pop_parks_and_coasters():
        with open("./src/api/parks_and_coasters.json", "rt") as data:
            parks = json.load(data)["parks"]

            for park in parks:
                db.session.merge(Park(
                    name=park["name"],
                    location=park["location"],
                    year_opened=park["year_opened"],
                    image_url=park["image_url"]
                ))
                db.session.commit()
                print(f"Successfuly added {park['name']}")

                park_id = Park.query.filter_by(name=park["name"]).first().id

                for coaster in park["coasters"]:
                    db.session.merge(Coaster(
                        name=coaster["name"],
                        year_opened=coaster["year_opened"],
                        park_id=park_id,
                        ride_type=coaster["ride_type"],
                        image_url=coaster["image_url"],
                        manufacturer=coaster["manufacturer"],
                        track_length=coaster["track_length"],
                        height=coaster["height"],
                        tallest_drop=coaster["tallest_drop"],
                        drop_angle=coaster["drop_angle"],
                        max_speed=coaster["max_speed"],
                        inversions=coaster["inversions"]
                    ))
                db.session.commit()
                print(f"Successfully added coasters at {park['name']}")