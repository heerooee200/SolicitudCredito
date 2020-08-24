import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Button from '@material-ui/core/Button';



class LSolicitudes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        
        

    }
    

    componentDidMount() {
        fetch("http://localhost:5000/api/clientes/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    acceptClick(key) {
       
        return fetch('http://localhost:5000/api/solicitud/'+key, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"dbAprobado" : true})
        }).then(alert('Aceptado satifactoriamente'))
        .then(window.location.reload(false))
        
    }

    generateClick(key) {
        const nombres   = ['Juan Mendoza','Sofia Perez','Carloz Diaz','Eduardo Martinez']
        const nrodocs   = ['71122566','67341233','55778909','76534222']
        const deudas    = [5000,300,30000,14000,1900]
        const sentinel  = ['regular','bueno','malo','regular','bueno']
        const indicador = [5,8,2,7,9]
        const montos    = [10000,9000,20000,13000,6000]
        var randomN1    = Math.floor(Math.random() * 4); 
        var randomN2    = Math.floor(Math.random() * 5); 
        

        return fetch('http://localhost:5000/api/clientes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                            "dcNroDoc": nrodocs[randomN1],
                            "dcNombre": nombres[randomN1],
                            "dnDeudaSBS": deudas[randomN2],
                            "dcPuntSentinel": sentinel[randomN2],
                            "dnIndicador":indicador[randomN2],
                            "fSolicitud": [
                                { "dnMonto": montos[randomN2], "dbAprobado": null}
                            ]
                        })
        }).then(alert('Generado satifactoriamente'))
        .then(window.location.reload(false))
        
    }

    deleteClick(key) {
        
        

        return fetch('http://localhost:5000/api/solicitud/'+key, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"dbAprobado" : false})
        }).then(alert('Denegado satifactoriamente'))
        .then(window.location.reload(false))
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Cargando..</div>;
        } else {
            if( items.length < 1){
                return <Button style={{marginTop: '10px'}} variant="contained" color="primary" onClick={this.generateClick} >  Generar data  </Button>
            }
            else{
                return (
                <List >
                    {items.map(item => (
                        <ListItem key={item.fSolicitud[0].pnCodSol}>
                            <ListItemAvatar>
                                <Avatar>
                                    <AssignmentIcon color="primary"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.fSolicitud[0].dnMonto +" Dolares"}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                        component="span"
                                        variant="body2"
                                        color="textPrimary"
                                        >
                                        {item.dcNroDoc} - {item.dcNombre}
                                        </Typography>
                                    {' — Deuda SBS :'+item.dnDeudaSBS+'— Puntuacion Sentinel: '+item.dcPuntSentinel+' - Indicador :'+item.dnIndicador}
                                    </React.Fragment>
                                }
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={()=>this.acceptClick(item.fSolicitud[0].pnCodSol) } >
                                    <AssignmentTurnedInIcon />
                                </IconButton>
                                
                                <IconButton edge="end" aria-label="delete" onClick={()=> this.deleteClick(item.fSolicitud[0].pnCodSol) } >
                                    <DeleteForeverIcon color="secondary"/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
                );
            }
        }
    }
}

export default LSolicitudes;