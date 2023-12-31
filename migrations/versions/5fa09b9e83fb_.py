"""empty message

Revision ID: 5fa09b9e83fb
Revises: 
Create Date: 2023-09-19 21:56:26.657334

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5fa09b9e83fb'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('park',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('location', sa.String(length=256), nullable=True),
    sa.Column('year_opened', sa.Integer(), nullable=True),
    sa.Column('image_url', sa.String(length=256), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=120), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('_password', sa.String(length=256), nullable=False),
    sa.Column('profile_pic', sa.String(length=256), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    op.create_table('coaster',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=True),
    sa.Column('year_opened', sa.Integer(), nullable=True),
    sa.Column('park_id', sa.Integer(), nullable=True),
    sa.Column('ride_type', sa.String(length=120), nullable=True),
    sa.Column('manufacturer', sa.String(length=120), nullable=True),
    sa.Column('track_length', sa.String(length=120), nullable=True),
    sa.Column('height', sa.String(length=120), nullable=True),
    sa.Column('tallest_drop', sa.String(length=120), nullable=True),
    sa.Column('drop_angle', sa.String(length=120), nullable=True),
    sa.Column('max_speed', sa.String(length=120), nullable=True),
    sa.Column('inversions', sa.Integer(), nullable=True),
    sa.Column('image_url', sa.String(length=256), nullable=True),
    sa.ForeignKeyConstraint(['park_id'], ['park.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('park_review',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('park_id', sa.Integer(), nullable=True),
    sa.Column('review_text', sa.Text(), nullable=True),
    sa.Column('score', sa.Integer(), nullable=True),
    sa.Column('likes', sa.Integer(), nullable=False),
    sa.Column('dislikes', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['park_id'], ['park.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('coaster_reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('coaster_id', sa.Integer(), nullable=True),
    sa.Column('review_text', sa.Text(), nullable=True),
    sa.Column('score', sa.Integer(), nullable=True),
    sa.Column('likes', sa.Integer(), nullable=False),
    sa.Column('dislikes', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['coaster_id'], ['coaster.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('coaster_reviews')
    op.drop_table('park_review')
    op.drop_table('coaster')
    op.drop_table('user')
    op.drop_table('park')
    # ### end Alembic commands ###
