import React, { Component } from 'react';
import {Grid,Label,Segment,List, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import MenuNav from '../pages/MenuNav';
import {connect} from "react-redux";


class Ver extends Component {
    state ={};
    componentDidMount(){
     const users = this.props.users.filter(p=>p.cedula == this.props.cc );    
     this.setState(users[0]);
     console.log(this.props.users);
     console.log(this.props.cc);
     console.log(users);

    }
    render() {
        return (
        <div>
        <MenuNav/>
        <Grid style={{ marginTop: '7em' }} columns={1}>
            <Grid.Column>
            <Segment raised>
                <Label color='green' ribbon>
                Paciente
                </Label>
                <span>Datos del paciente</span>
                <List>
                    <List.Item>
                    <List.Content>
                        <List.Header>Nombre</List.Header>
                        <List.Description>{this.state.nombre}</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item>    
                    <List.Content>
                        <List.Header>Ciudad</List.Header>
                        <List.Description>{this.state.ciudad}</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item>    
                    <List.Content>
                        <List.Header>Dirección</List.Header>
                        <List.Description>{this.state.direccion}</List.Description>
                    </List.Content>
                    <List.Content>
                        <List.Header>Peso</List.Header>
                        <List.Description>{this.state.peso}</List.Description>
                    </List.Content>
                    <List.Content>
                        <List.Header>Altura</List.Header>
                        <List.Description>{this.state.altura}</List.Description>
                    </List.Content>
                    <List.Content>
                        <List.Header>Edad</List.Header>
                        <List.Description>{this.state.edad}</List.Description>
                    </List.Content>
                    <List.Content>
                        <List.Header>Email</List.Header>
                        <List.Description>{this.state.email}</List.Description>
                    </List.Content>
                    <List.Content>
                        <List.Header>Telefono</List.Header>
                        <List.Description>{this.state.tel}</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item>    
                    <List.Content>
                        <List.Header>Cedula</List.Header>
                        <List.Description>{this.state.cedula}</List.Description>
                    </List.Content>
                    </List.Item>
                    <List.Item style={{ marginTop: '1em' }}>    
                    <List.Content>
                        <List.Header></List.Header>
                        <List.Description>
                            <Link to={`/VerEjercicios/${this.state._id}`}><Button primary >Ver Ejercicios</Button></Link>
                            <Link to="/Users"><Button >Regresar</Button></Link>
                        </List.Description>
                    </List.Content>
                    </List.Item>
                </List>
            </Segment>
            </Grid.Column>
        </Grid>    
        </div>
        );
    }
}
const mapStateToProp =(state)=>{
    return{
        users: state.users.users
    };
  }
  export default connect(mapStateToProp,null)(Ver);
  
  