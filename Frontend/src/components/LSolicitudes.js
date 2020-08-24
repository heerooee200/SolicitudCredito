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
        const formData = new FormData();
        formData.append('dbAprobado', true);
        return fetch('http://localhost:5000/api/solicitud/'+key, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({"dbAprobado" : true})
        }).then(alert('Aceptado satifactoriamente'))
        .then(window.location.reload(false))
        
    }

    deleteClick(key) {
        const formData = new FormData();
        formData.append('dbAprobado', false);

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

export default LSolicitudes;