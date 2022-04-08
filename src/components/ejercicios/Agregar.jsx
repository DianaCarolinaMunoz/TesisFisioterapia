import React, { Component } from 'react';
import MenuNav from '../pages/MenuNav';
import { Form,Button,Segment,Label,Grid, Dropdown } from 'semantic-ui-react';
import {crearEjercicio} from "../../actions/ejerciciosAction";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';


class Agregar extends Component {
    
    state ={
        nombreEjercicio: null,
        duracion: null,
        sesiones: null,
        repeticion:  null,
        frecuencia: null,
        series: null,
        apnea: null,
        fraccion: null,
        flujo: null,
        id_user:this.props.id
    };
    
    handleSave = (e) => {
        e.preventDefault();
        this.props.crearEjercicio({
           nombreEjercicio: this.state.nombreEjercicio,
            duracion: this.state.duracion,
            sesiones: this.state.sesiones,
            repeticion:  this.state.repeticion,
            frecuencia: this.state.frecuencia,
            series: this.state.series,
            apnea: this.state.apnea,
            fraccion: this.state.fraccion,
            flujo: this.state.flujo,
            id_user:this.state.id_user
        });
        
        this.props.history.push("/VerEjercicios");
    }
    changeInput = (event) => {
        this.setState({[event.target.name]:event.target.value});
    }
    render() {
        const typeOptions = [
              {
                key: 'nombreEjercicio',
                text: 'Patron diafragmatico',
                value: 'patronDiafragmatico',
              },
              {
                key: 'nombreEjercicio',
                text: 'Inspiracion profunda',
                value: 'inspiracionProfunda',
              },
              {
                key: 'nombreEjercicio',
                text: 'Inspiracion fraccionada en tiempo',
                value: 'inspiracionftiempo',
              },
              {
                key: 'nombreEjercicio',
                text: 'Suspiros inspiratirios',
                value: 'suspirosInspiratorios',
              },
              {
                key: 'nombreEjercicio',
                text: 'Espiracion Abreviada',
                value: 'espiracionAbre',
              },
              {
                key: 'nombreEjercicio',
                text: 'Ciclo Activo',
                value: 'cicloActivo',
              },
            
          ]
        return (
            <div>
            <MenuNav/>
            <Grid style={{ marginTop: '7em' }} columns={1}>
            <Grid.Column>
            <Segment raised>
                <Label color='teal' ribbon>
                Registrar nuevo ejercicio
                </Label>
                <Form style={{ marginTop: '1em' }}>
                    <Form.Field>
                    <label>Nombre</label>
                    <Dropdown
                        name="nombreEjercicio"
                        placeholder='Select Ejercicio'
                        fluid
                        selection
                        options={typeOptions}
                        onChange={this.changeInput}
                        />
                    </Form.Field>
                    <Form.Field>
                    <label>Duracion</label>
                    <input  name="duracion" placeholder='duracion' onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Resiones</label>
                    <input 
                        name="sesiones"
                        placeholder='sesiones'
                        type='number'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Repeticion</label>
                    <input 
                        name="repeticion"
                        placeholder='repeticion'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Frecuencia</label>
                    <input 
                        name="frecuencia"
                        placeholder='frecuencia'
                        type='number'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Series</label>
                    <input 
                        name="series"
                        placeholder='series'
                        type='number'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Apnea</label>
                    <input 
                        name="apnea"
                        placeholder='apnea'
                        type='number'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Fraccion</label>
                    <input 
                        name="fraccion"
                        placeholder='fraccion'
                        type='number'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Form.Field>
                    <label>Flujo</label>
                    <input 
                        name="flujo"
                        placeholder='flujo'
                        onChange={this.changeInput} />
                    </Form.Field>
                    <Button onClick={this.handleSave} primary type='submit'>Agregar</Button>
                    <Link to="/VerEjercicios"><Button type='submit'>Regresar</Button></Link>
                </Form>
            </Segment>
            </Grid.Column>
            </Grid>
            </div>
        );
    }
}

export default connect(null,{crearEjercicio})(Agregar);