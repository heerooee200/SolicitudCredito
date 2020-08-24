from marshmallow import fields
from app.ext import ma


class ClienteSchema(ma.Schema):
    pnCodCliente   = fields.Integer(dump_only=True)
    dcNroDoc       = fields.String()
    dcNombre       = fields.String()
    dnDeudaSBS     = fields.Float()
    dcPuntSentinel = fields.String()
    dnIndicador    = fields.Integer()
    fSolicitud     = fields.Nested('SolicitudSchema', many=True)

class SolicitudSchema(ma.Schema):
    pnCodSol   = fields.Integer(dump_only=True)
    dnMonto    = fields.Float()
    dbAprobado = fields.Boolean(allow_none=True)