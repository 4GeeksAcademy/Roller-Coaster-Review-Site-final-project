import random
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.hybrid import hybrid_property
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True, nullable=False)
    _password = db.Column(db.String(256), unique=False, nullable=False)
    profile_pic = db.Column(db.String(256), default="")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username" : self.username,
            "profile_pic" : self.profile_pic,
            "park_reviews" : [review.serialize() for review in self.park_reviews],
            "coaster_reviews" : [review.serialize for review in self.coaster_reviews]
            # do not serialize the password, its a security breach
        }
    
    @hybrid_property
    def password(self):
        return self._password

    @password.setter
    def password(self, password):
        self._password = generate_password_hash(password)
    
    def check_password(self, password):
        return check_password_hash(self._password, password)

class Park(db.Model):
    __tablename__ = 'park'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    location = db.Column(db.String(256))
    year_opened = db.Column(db.Integer)
    image_url = db.Column(db.String(256), default="")

    def calc_avg_rating(self, reviews):
        if len(reviews) == 0:
            return 0
        else:
            avg_score = 0
            for review in reviews:
                avg_score += review["score"]
            return round(avg_score / len(reviews), 1)

    def __repr__(self):
        return f'<Park {self.name}>'

    def serialize(self):
        return {
            "id" : self.id,
            "name" : self.name,
            "location" : self.location,
            "year_opened" : self.year_opened,
            "avg_score" : self.calc_avg_rating([review.serialize() for review in self.reviews]),
            "coasters" : [coaster.serialize() for coaster in self.coasters],
            "reviews" : [review.serialize() for review in self.reviews],
            "image_url" : self.image_url
        }
    

class ParkReview(db.Model):
    __tablename__ = 'park_review'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    park_id = db.Column(db.Integer, db.ForeignKey('park.id'))
    review_text = db.Column(db.Text)
    score = db.Column(db.Integer)
    likes = db.Column(db.Integer, nullable=False, default=0)
    dislikes = db.Column(db.Integer, nullable=False, default=0)

    user = db.relationship(
        "User", uselist=False,
        backref=db.backref("park_reviews", uselist=True)
    )

    park = db.relationship(
        "Park", uselist=False,
        backref=db.backref("reviews", uselist=True)
    )

    def serialize(self):
        return {
            "id" : self.id,
            "user.id" : self.user_id,
            "park_id" : self.park_id,
            "username" : self.user.username,
            "park_name" : self.park.name,
            "score" : self.score,
            "review_text" : self.review_text,
            "likes" : self.likes,
            "dislikes" : self.dislikes
        }

class Coaster(db.Model):
    __tablename__ = "coaster"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    year_opened = db.Column(db.Integer)
    park_id = db.Column(db.Integer, db.ForeignKey('park.id'))
    ride_type = db.Column(db.String(120))
    manufacturer = db.Column(db.String(120))
    track_length = db.Column(db.String(120))
    height = db.Column(db.String(120))
    tallest_drop = db.Column(db.String(120))
    drop_angle = db.Column(db.String(120))
    max_speed = db.Column(db.String(120))
    inversions = db.Column(db.Integer, default=0)
    image_url = db.Column(db.String(256), default="")

    park = db.relationship(
        "Park", uselist=False,
        backref=db.backref("coasters", uselist=True)
    )

    def calc_avg_rating(self, reviews):
        if len(reviews) == 0:
            return 0
        else:
            avg_score = 0
            for review in reviews:
                avg_score += review["score"]
            return round(avg_score / len(reviews), 1)

    def __repr__(self):
            return f'<Coaster id={self.id} name={self.name}'
    
    def serialize(self):
        return {
            "id" : self.id,
            "name" : self.name,
            "park_name" : self.park.name,
            "location" : self.park.location,
            "park_id" : self.park_id,
            "year_opened": self.year_opened,
            "ride_type" : self.ride_type,
            "manufacturer" : self.manufacturer,
            "track_length" : self.track_length,
            "height" : self.height,
            "tallest_drop" : self.height,
            "drop_angle" : self.drop_angle,
            "max_speed" : self.max_speed,
            "inversions" : self.inversions,
            "reviews" : [review.serialize() for review in self.reviews],
            "avg_score" : self.calc_avg_rating([review.serialize() for review in self.reviews]),
            "image_url" : self.image_url
        }
    

class CoasterReviews(db.Model):
    __tablename__ = "coaster_reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    coaster_id = db.Column(db.Integer, db.ForeignKey('coaster.id'))
    review_text = db.Column(db.Text)
    score = db.Column(db.Integer)
    likes = db.Column(db.Integer, nullable=False, default=0)
    dislikes = db.Column(db.Integer, nullable=False, default=0)

    user = db.relationship(
        "User", uselist=False,
        backref=db.backref("coaster_reviews", uselist=True)
    )

    coaster = db.relationship(
        "Coaster", uselist=False,
        backref=db.backref("reviews", uselist=True)
    )

    def serialize(self):
        return {
            "id" : self.id,
            "user.id" : self.user_id,
            "coaster_id" : self.coaster_id,
            "user_name" : self.user.username,
            "coaster_name": self.coaster.name,
            "score" : self.score,
            "review_text" : self.review_text,
            "likes" : self.likes,
            "dislikes" : self.dislikes
        }
    
import random
import string
class PasswordReset(db.Model):
    def __init__(self):
        self.users = {}  # A dictionary to store user information

    def create_user(self, username, password):
        # In a real application, you would hash and salt the password before storing it.
        self.users[username] = {'password': password, 'reset_token': None}

    def reset_password_request(self, username):
        # Generate a random reset token
        reset_token = ''.join(random.choices(string.ascii_letters + string.digits, k=16))

        # Store the reset token in the user's profile (In a database in a real application)
        if username in self.users:
            self.users[username]['reset_token'] = reset_token
            return reset_token
        else:
            return None

    def reset_password(self, username, reset_token, new_password):
        # Check if the reset token matches the one stored for the user
        if username in self.users and 'reset_token' in self.users[username] and self.users[username]['reset_token'] == reset_token:
            # Update the user's password
            self.users[username]['password'] = new_password
            # Clear the reset token
            self.users[username]['reset_token'] = None
            return True
        else:
            return False