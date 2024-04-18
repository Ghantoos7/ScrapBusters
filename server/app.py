from flask import Flask
from api.v0.messages.routes import messages_blueprint
from api.v0.questions.routes import questions_blueprint
from api.v0.chatbot.routes import chatbot_blueprint
from flask_cors import CORS
from config import Config

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})
app.config.from_object(Config) 

app.register_blueprint(messages_blueprint, url_prefix='/api/v0/messages')
app.register_blueprint(questions_blueprint, url_prefix='/api/v0/questions')
app.register_blueprint(chatbot_blueprint, url_prefix='/api/v0/chatbot')


if __name__ == 'main':
    app.run(debug=True)

