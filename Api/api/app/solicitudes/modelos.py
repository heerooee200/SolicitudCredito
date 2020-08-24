from app.db import db, ModeloBase


class Cliente(db.Model, ModeloBase):
    # Codigo autoincremental
    pnCodCliente   = db.Column(db.Integer, primary_key=True)
    # DNI de la persona
    dcNroDoc       = db.Column(db.String)
    # Nombre y Apellidos de la persona
    dcNombre       = db.Column(db.String)
    # Deuda de la SBS
    dnDeudaSBS     = db.Column(db.Numeric)
    # Puntuacion segun sentinel
    dcPuntSentinel = db.Column(db.String)
    # Indicador de la IA
    dnIndicador    = db.Column(db.Integer)
    # Relacion con solicitud
    fSolicitud   = db.relationship('Solicitud', backref='cliente', lazy=False, cascade='all, delete-orphan')

    # Constructor
    def __init__(self, dcNroDoc, dcNombre, dnDeudaSBS, dcPuntSentinel, dnIndicador,fSolicitud = []):
        self.dcNroDoc       = dcNroDoc
        self.dcNombre       = dcNombre
        self.dnDeudaSBS     = dnDeudaSBS
        self.dcPuntSentinel = dcPuntSentinel
        self.dnIndicador    = dnIndicador
        self.fSolicitud     = fSolicitud

    

class Solicitud(db.Model, ModeloBase):
    # Codigo autoincremental
    pnCodSol     = db.Column(db.Integer, primary_key=True)
    # Foreign Key del Cliente
    fnCodCliente = db.Column(db.Integer, db.ForeignKey('cliente.pnCodCliente'), nullable=False)
    # Monto solicitado
    dnMonto      = db.Column(db.Numeric)
    # Aprobacion de la solicitud
    dbAprobado = db.Column(db.Boolean)

    # Constructor
    def __init__(self, dnMonto, dbAprobado):
        self.dnMonto    = dnMonto
        self.dbAprobado = dbAprobado
    