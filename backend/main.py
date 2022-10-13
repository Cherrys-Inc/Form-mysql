# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.
from flask import Flask, render_template, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

app = Flask(__name__)

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://anisha:shahid2410@localhost/tododb'

db = SQLAlchemy(app)
cors = CORS(app)


class Form(db.Model):
    firstName = db.Column(db.String(200))
    lastName = db.Column(db.String(200))
    email = db.Column(db.String(200),primary_key=True)
    mobile = db.Column(db.Integer)
    dob = db.Column(db.String(200))
    gender = db.Column(db.String(200))
    course = db.Column(db.String(200))
    feedback = db.Column(db.String(500))
    agree = db.Column(db.String(200))

    def to_json(self):
        return {
            'firstName': self.firstName,
            'lastName': self.lastName,
            'email': self.email,
            'mobile': self.mobile,
            'dob': self.dob,
            'gender': self.gender,
            'course': self.course,
            'feedback': self.feedback,
            'agree': self.agree
        }


@app.route('/add', methods=['POST'])
@cross_origin()
def create():
    form = Form()
    json_data = request.get_json(force=True)
    form.firstName = json_data['firstName']
    form.lastName = json_data['lastName']
    form.email = json_data['email']
    form.mobile = json_data['mobile']
    form.gender = json_data['gender']
    form.course = json_data['course']
    form.feedback = json_data['feedback']
    form.dob = json_data['dob']
    form.file = json_data['file']
    form.agree = json_data['agree']

    db.session.add(form)
    db.session.commit()
    return "Record added"


@app.route("/display/<email>", methods=['GET'])
@cross_origin()
def findbyid(email):
    rec = Form.query.filter(Form.email == email).first()
    data = rec.to_json()

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)

# Press the green button in the gutter to run the script.

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
