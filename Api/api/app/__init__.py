from flask import Flask, jsonify
from flask_restful import Api
from flask_cors import CORS
from app.db import db

from app.solicitudes.recursos import SolicitudCreditosbp

from config.default import defaultConfig
from .ext import ma, migrate

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    #Configura la api con los parametros asignados en config/default
    app.config.from_object(defaultConfig)

    # Inicializa las extensiones
    db.init_app(app)
    ma.init_app(app)
    migrate.init_app(app, db)

    # Captura todos los errores 404
    Api(app, catch_all_404s=True)

    # Deshabilita el modo estricto de acabado de una URL con /
    app.url_map.strict_slashes = False

    # Registra los blueprints
    app.register_blueprint(SolicitudCreditosbp)

    # Registra manejadores de errores personalizados
    register_error_handlers(app)

    return app

# Manejo de errores
def register_error_handlers(app):
    @app.errorhandler(Exception)
    def handle_exception_error(e):
        print(e)
        return jsonify({'msg': 'Internal server error'}), 500
    @app.errorhandler(405)
    def handle_405_error(e):
        return jsonify({'msg': 'Method not allowed'}), 405
    @app.errorhandler(403)
    def handle_403_error(e):
        return jsonify({'msg': 'Forbidden error'}), 403
    @app.errorhandler(404)
    def handle_404_error(e):
        return jsonify({'msg': 'Not Found error'}), 404
    