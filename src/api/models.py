from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Columns(db.String(120))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Park(db.Model):
    __tablename__ = 'park'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Columns(db.String(120))
    location = db.Column(db.String(256))
    year_opened = db.Column(db.Integer)

    def __repr__(self):
        return f'<Park {self.name}>'

    def serialize(self):
        return {
            "id" : self.id,
            "name" : self.name,
            "location" : self.location,
            "year_opened" : self.year_opened,
            "coasters" : [coaster.serialize() for coaster in self.coasters],
            "reviews" : [review.serialize() for review in self.reviews]
        }
    

class ParkReview(db.model):
    __tablename__ = 'park_review'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    park_id = db.Column(db.Integer, db.ForeignKey('park.id'))
    review_text = db.Column(db.Text)
    score = db.Column(db.Integer)
    likes = db.Column(db.Integer)
    dislikes = db.Column(db.Integer)

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
            "coaster_id" : self.coaster_id,
            "score" : self.score,
            "review_text" : self.review_text,
            "likes" : self.likes,
            "dislikes" : self.dislikes
        }

class Coasters(db.Model):
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
    inversions = db.Column(db.Integer)

    park = db.relationship(
        "Park", uselist=False,
        backref=db.backref("coasters", uselist=True)
    )

    def __repr__(self):
            return f'<Coaster id={self.id} name={self.name}'
    
    def serialize(self):
        return {
            "id" : self.id,
            "name" : self.name,
            "year_opened": self.year_opened,
            "ride_type" : self.ride_type,
            "manufacturer" : self.manufacturer,
            "track_length" : self.track_length,
            "height" : self.height,
            "tallest_drop" : self.height,
            "drop_angle" : self.drop_angle,
            "max_speed" : self.max_speed,
            "inversions" : self.inversions,
            "reviews" : [review.serialize() for review in self.reviews]
        }
    

class CoasterReviews(db.Model):
    __tablename__ = "coaster_reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    coaster_id = db.Column(db.Integer, db.ForeignKey('coaster.id'))
    review_text = db.Column(db.Text)
    score = db.Column(db.Integer)
    likes = db.Column(db.Integer)
    dislikes = db.Column(db.Integer)

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
            "coaster_name": self.coaster.name,
            "score" : self.score,
            "review_text" : self.review_text,
            "likes" : self.likes,
            "dislikes" : self.dislikes
        }