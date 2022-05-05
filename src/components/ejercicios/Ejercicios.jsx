import React, { Component } from 'react';
import {Table,Button,Icon,Grid,Segment,Label, Card, TableHeader, TableBody, TableCell, TableRow} from 'semantic-ui-react'
import MenuNav from '../pages/MenuNav';
import {Link} from "react-router-dom";
import{allEjerciciosByUser} from "../../actions/ejerciciosAction";
import {getUserbyId} from '../../actions/usersAction';
import Ejercicio from './Ejercicio';
import {connect} from "react-redux";



class Ejercicios extends Component {
  
  componentDidMount(){
    this.props.allEjerciciosByUser({id_user:this.props.id_user});
    console.log(this.state);
    //this.props.users.filter(p=>p._id == this.props.id_user );  
    //this.setState(users[0]);
    //this.props.getUserbyId({id_user:this.props.id_user});
    this.props.getUserbyId({id_user:this.props.id_user}).then((e)=>{
      
      //this.setState(e)
     console.log(this.state);
  });; 
  }
  
    
    
  

  

    render() {
      const {ejercicios} = this.props;
      //const {user} =  this.props.getUserbyId({id_user:this.props.id_user});
        return (
          <div>
          <MenuNav/> 
          
          <Grid style={{ marginTop: '7em' }} columns={1}>
            <Grid.Column>  
            <Segment raised>
                <Table>
                {/* <Table.Footer fullWidth>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='3'>
                    <Link to={`/AgregarEjercicio/${this.props.id_user}`}>
                      <Button floated='right' icon labelPosition='left' primary  size='small'>
                      <Icon name='add' />
                      Agregar>
                      </Button>
                    </Link>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer> */}
                  <TableBody>
                  <TableRow>
                   <TableCell>Datos para Fisioterapia </TableCell>
                   <TableCell></TableCell>
                   </TableRow>
                  <TableRow>
                   <TableCell>Capacidad vital:</TableCell>
                   <TableCell>23.0</TableCell>
                   </TableRow>
                  </TableBody>
                </Table>
            </Segment>  
            <Segment raised>
                <Label color='blue' ribbon>
                Prescripción                </Label>
                <Card.Group>
                  {ejercicios.map((ejercicio,index)=>{
                    return (<Ejercicio 
                      key={index} ejercicio={ejercicio}></Ejercicio>)
                  })}
                  </Card.Group>
          </Segment>
          <Segment raised>
                <Label color='blue' ribbon>
                Resultados de Presicripción                </Label>
            <Card.Group>
                <Card fluid color="blue" >
            <Card.Content >
           
                <Card.Header></Card.Header>
                <Card.Description width="60%">
                </Card.Description>
                <Card.Content extra>
                <Link to={`/VerResultados/${this.props.id_user}`}>                    
                <Button primary floated='right'>
                    Ver Resultados
                <Icon name='right chevron' />
                </Button>
                </Link>
                </Card.Content>
                </Card.Content>
                </Card>
                  </Card.Group>
          </Segment>
          </Grid.Column>
          </Grid>
          
          </div>
        );
    }
}
const mapStateToProp =(state)=>{
  return{
    ejercicios: state.ejercicios.ejercicios,
    users: state.users.users
  };
}
export default connect(mapStateToProp,{allEjerciciosByUser,getUserbyId})(Ejercicios);
