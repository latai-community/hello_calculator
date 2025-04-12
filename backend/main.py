from flask import Flask, send_from_directory
from flask_swagger_ui import get_swaggerui_blueprint
from app.controller.calculator_controller import calculate_bp
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


@app.route('/swagger.yaml')
def swagger_yaml():
    return send_from_directory('docs', 'swagger.yaml')


SWAGGER_URL = '/api/docs'
API_YAML_URL = '/swagger.yaml'

swagger_bp = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_YAML_URL,
    config={
        'app_name': "Hello Calculator API"
    }
)

app.register_blueprint(swagger_bp, url_prefix=SWAGGER_URL)
app.register_blueprint(calculate_bp, url_prefix="/api")

if __name__ == '__main__':
    app.run(debug=True)
