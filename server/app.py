from flask import Flask
from api.v0.messages.routes import messages_blueprint
from api.v0.questions.routes import questions_blueprint
from api.v0.chatbot.routes import chatbot_blueprint
from flask_cors import CORS
from config import Config

# Initialize Flask application and enable CORS
app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Load configuration and register blueprints for routes
app.config.from_object(Config) 
app.register_blueprint(messages_blueprint, url_prefix='/api/v0/messages')
app.register_blueprint(questions_blueprint, url_prefix='/api/v0/questions')
app.register_blueprint(chatbot_blueprint, url_prefix='/api/v0/chatbot')

# Run the application if this file is the entry point
if __name__ == '__main__':
    app.run(debug=True)