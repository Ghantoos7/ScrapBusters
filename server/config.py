import os
from dotenv import load_dotenv

class Config:
    
    load_dotenv()  

    DEBUG = os.getenv('DEBUG', 'False')
    SECRET_KEY = os.getenv('SECRET_KEY')
    OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')
    

