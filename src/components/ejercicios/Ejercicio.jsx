import React, { Component } from 'react';
import {Item,Button,Icon, Image, Form, Input,Card} from 'semantic-ui-react'
import {Link,withRouter} from "react-router-dom";
import { connect } from 'react-redux';


class Ejercicio extends Component {

    componentDidMount(){
        //this.props.deleteUser();
    }

    handleDelete = (e) => {
    /*    e.preventDefault();
       
        this.props.deleteUser({
          cedula: e.target.value
        }).then(()=>{
            this.props.mostrarUsers()
        });;
    */
    }
    render() {
        const {ejercicio} = this.props;
        return (
            <Card fluid color="blue" >
            <Card.Content >
           {/*  <Icon style={{float:'right'}}
                name='trash'
            /> */}
                <Card.Header></Card.Header>
                <Card.Description width="60%">
                <Form>
                <Form.Group >
                {ejercicio.last_update == null ? '' :
                    <Form.Field
                        id='form-input-control-last_update'
                        control={Input}
                        editable = {false}
                        label='Last update'
                        placeholder='last update'
                        value={ejercicio.last_update}
                        width={6}
                    />
                }    
                {ejercicio.apnea == null ? '' :
                    <Form.Field
                        id='form-input-control-apnea'
                        control={Input}
                        label='apnea'
                        placeholder='apnea'
                        value={ejercicio.apnea}
                        width={6}
                    />
                }
                {ejercicio.duracion == null ? '' :
                    <Form.Field
                        id='form-input-control-duracion'
                        control={Input}
                        label='duracion'
                        placeholder='duracion'
                        value={ejercicio.duracion}
                        width={6}
                    />
                }
                {ejercicio.fraccion == null ? '' :
                     <Form.Field
                        id='form-input-control-fraccion'
                        control={Input}
                        label='fraccion'
                        placeholder='fraccion'
                        value={ejercicio.fraccion}
                        width={6}
                    />
                }
                {ejercicio.frecuencia == null ? '' :
                     <Form.Field
                        id='form-input-control-frecuencia'
                        control={Input}
                        label='frecuencia'
                        placeholder='frecuencia'
                        value={ejercicio.frecuencia}
                        width={6}
                    />
                }
                {ejercicio.repeticion == null ? '' :
                    <Form.Field
                        id='form-input-control-repeticion'
                        control={Input}
                        label='repeticion'
                        placeholder='repeticion'
                        value={ejercicio.repeticion}
                        width={6}
                    />
                }
                {ejercicio.series == null ? '' :
                    <Form.Field
                        id='form-input-control-series'
                        control={Input}
                        label='series'
                        placeholder='series'
                        value={ejercicio.series}
                        width={6}
                    />
                }
                {ejercicio.sesiones == null ? '' :
                    <Form.Field
                        id='form-input-control-sesiones'
                        control={Input}
                        label='sesiones'
                        placeholder='sesiones'
                        value={ejercicio.sesiones}
                        width={6}
                    />
                }
                {ejercicio.type == "cicloActivo" ?
                    <Form.Field
                        id='form-input-control-sesiones'
                        control={Input}
                        label='Ejercicio anterior'
                        placeholder='Ejercicio anterior'
                        value={ejercicio.id_user}
                        width={6}
                    /> : ''
                }
                    </Form.Group>
                </Form>
                </Card.Description>
                <Card.Content extra>
                <Link to={`/updateEjercicio/${ejercicio._id}`}>
                <Button primary floated='right'>
                    Actualizar
                <Icon name='right chevron' />
                </Button>
                </Link>
                <Link to={`/updateEjercicio/${ejercicio._id}`}>
                <Button secundary floated='right'>
                    Ver Historial
                <Icon name='right chevron' />
                </Button>
                </Link>
                </Card.Content>
            </Card.Content>
            </Card>
          
   
       
        );
    }
}

export default connect(null,null)(withRouter(Ejercicio));
