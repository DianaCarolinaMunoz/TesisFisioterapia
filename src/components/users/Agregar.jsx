import React, { Component } from 'react';
import MenuNav from '../pages/MenuNav';
import { Form,Button,Segment,Label,Grid } from 'semantic-ui-react';
import {crearUser} from "../../actions/usersAction";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';


class Agregar extends Component {

    state ={
        nombre: "",
        ciudad: "",
        edad: "",
        peso:  "",
        altura: "",
        tel: "",
        email: "",
        direccion: "",
        cedula: "",
        password:"",
        type:"paciente"
    };
    handleSave = (e) => {
        e.preventDefault();
        this.props.crearUser({
            nombre: this.state.nombre,
            ciudad: this.state.ciudad,
            edad: this.state.edad,
            peso:  this.state.peso,
            altura: this.state.altura,
            tel: this.state.tel,
            email: this.state.email,
            direccion: this.state.direccion,
            cedula: this.state.cedula,
            password:this.state.password,
            type:this.state.type
        });
        
        this.props.history.push("/Users");
    }
    changeInput = (event) => {
        this.setState({[event.target.name]:event.target.value});
    }
    render() {
        return (
            <div>
            <MenuNav/>
            <Grid style={{ marginTop: '7em' }} columns={1}>
            <Grid.Column>
            <Segment raised>
                <Label color='teal' ribbon>
                Registro de Caficultor
                </Label>
                <Form style={{ marginTop: '1em' }}>
                    <Form.Field>
                    <label>Nombre</label>
                    <input  name="nombre" placeholder='Nombre' onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Ciudad</label>
                    <input  name="ciudad" placeholder='ciudad' onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Edad</label>
                    <input 
                        name="edad"
                        placeholder='Edad'
                        type='number'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Peso</label>
                    <input 
                        name="peso"
                        placeholder='peso'
                        type='number'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Altura</label>
                    <input 
                        name="altura"
                        placeholder='Altura'
                        type='number'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Telefono</label>
                    <input 
                        name="tel"
                        placeholder='Tel'
                        type='number'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Email</label>
                    <input 
                        name="email"
                        placeholder='Email'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Direccion</label>
                    <input  name="direccion" placeholder='Direccion' onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Cedula</label>
                    <input 
                        name="cedula"
                        placeholder='Cedula'
                        type='number'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <input 
                        name="type"
                        placeholder='type'
                        type='hidden'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Password</label>
                    <input 
                        name="password"
                        placeholder='Password'
                        type='password'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Button onClick={this.handleSave} primary type='submit'>Agregar</Button>
                    <Link to="/Users"><Button type='submit'>Regresar</Button></Link>
                </Form>
            </Segment>
            </Grid.Column>
            </Grid>
            </div>
        );
    }
}

export default connect(null,{crearUser})(Agregar);