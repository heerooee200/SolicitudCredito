from flask import request, Blueprint
from flask_restful import Api, Resource
from .esquemas import  SolicitudSchema,ClienteSchema
from .modelos import  Solicitud,Cliente

SolicitudCreditosbp = Blueprint('SolicitudCreditosbp', __name__)

Cliente_schema = ClienteSchema()
Solicitud_schema = SolicitudSchema()

api = Api(SolicitudCreditosbp)


class SolicitudesResource(Resource):
    def get(self):
        solicitudes = Solicitud.get_all()
        result = Solicitud_schema.dump(solicitudes, many=True)
        return result
        
    def put(self,sol_id):
        data = request.get_json()
        solicitud     =  Solicitud.first_filter(pnCodSol=sol_id)
        dictSolicitud =  Solicitud_schema.load(data)
        solicitud.dbAprobado = dictSolicitud['dbAprobado']
        solicitud.save()
        resp = Solicitud_schema.dump(solicitud)
        
        return resp, 201

class ClientesResource(Resource):
    def get(self):
        # Consulta
        clientes = Cliente.get_all()  
        result = Cliente_schema.dump(clientes, many=True)

        # Filtrar solicitudes menores a 50k y aun sin revisar(dbAprobado = None)
        result = [sol for sol in result if sol['fSolicitud'][0]['dnMonto'] <= 50000.0 and sol['fSolicitud'][0]['dbAprobado'] is None]

        return result

    def post(self):
        data = request.get_json()
        dictClientes = Cliente_schema.load(data)
        cliente = Cliente(dcNroDoc=dictClientes['dcNroDoc'],
                    dcNombre=dictClientes['dcNombre'],
                    dnDeudaSBS=dictClientes['dnDeudaSBS'],
                    dcPuntSentinel=dictClientes['dcPuntSentinel'],
                    dnIndicador=dictClientes['dnIndicador']
        )

        for solicitud in dictClientes['fSolicitud']:
            print(solicitud)
            cliente.fSolicitud.append(Solicitud(solicitud['dnMonto'],solicitud['dbAprobado']))
        
        cliente.save()
        resp = Cliente_schema.dump(cliente)
        return resp, 201

api.add_resource(ClientesResource, '/api/clientes/', endpoint='cliente_resource')
api.add_resource(SolicitudesResource, '/api/solicitud/<int:sol_id>', endpoint='solicitud_resource')