import React, { Component } from 'react';
import {Grid,Label,Segment,List, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import MenuNav from '../pages/MenuNav';
import {connect} from "react-redux";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
    ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area, LabelList } from 'recharts';

import { PureComponent } from 'react';
import { ComposedChart, Bar } from 'recharts';    

    /*const data02 = [
        { name: 'Page A', uv: 300, pv: 2600, amt: 3400 },
        { name: 'Page B', uv: 400, pv: 4367, amt: 6400 },
        { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
        { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
        { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
        { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
        { name: 'Page G', uv: 189, pv: 4800, amt: 2400 },
      ];*/
    /* const data03 = [
      { time: '16:55:54', volume: 0 },
        { time: '16:55:54', volume: 3 },
        { time: '16:55:54', volume: 4 },
        { time: '16:55:54', volume: 5 },
        { time: '16:55:55', volume: 6 },
        { time: '16:55:55', volume: 7 },
        { time: '16:55:55', volume: 10 },
        { time: '16:55:55', volume: 30 },
        { time: '16:55:55', volume: 50 },
        { time: '16:55:56', volume: 60 },
        { time: '16:55:56', volume: 79 },
        { time: '16:55:56', volume: 89 },
        { time: '16:55:56', volume: 100 },
        { time: '16:55:56', volume: 111 },
        { time: '16:55:57', volume: 115 },
        { time: '16:55:57', volume: 126 },
        { time: '16:55:57', volume: 130 },
        { time: '16:55:57', volume: 130 },
        { time: '16:55:57', volume: 145 },
        { time: '16:55:58', volume: 145 },
        { time: '16:55:58', volume: 155 },
        { time: '16:55:58', volume: 156 },
        { time: '16:55:58', volume: 157 },
        { time: '16:55:58', volume: 158 },
        { time: '16:55:59', volume: 163 },
        { time: '16:55:59', volume: 164 },
        { time: '16:55:59', volume: 164 },
        { time: '16:55:59', volume: 164 },
        { time: '16:55:59', volume: 170 },
        { time: '16:56:00', volume: 172 },
        { time: '16:56:00', volume: 173 },
        { time: '16:56:00', volume: 175 },
        { time: '16:56:00', volume: 176 },
        { time: '16:56:00', volume: 178 },
        { time: '16:56:01', volume: 179 },
        { time: '16:56:01', volume: 180 },
        { time: '16:56:01', volume: 182 },
        { time: '16:56:01', volume: 183 },
        { time: '16:56:01', volume: 185 },
        { time: '16:56:02', volume: 186 },
        { time: '16:56:02', volume: 187 },
        { time: '16:56:02', volume: 189 },
        { time: '16:56:02', volume: 190 },
        { time: '16:56:02', volume: 191 },
        { time: '16:56:03', volume: 195 },
        { time: '16:56:03', volume: 196 },
        { time: '16:56:03', volume: 197 },
        { time: '16:56:03', volume: 200 },
        { time: '16:56:03', volume: 210 },
        { time: '16:56:07', volume: 228 },
        { time: '16:56:07', volume: 250 },
        { time: '16:56:07', volume: 251 },
        { time: '16:56:07', volume: 255 },
        { time: '16:56:08', volume: 267 },
        { time: '16:56:08', volume: 269 },
        { time: '16:56:09', volume: 279 },
        { time: '16:56:09', volume: 289 },
        { time: '16:56:09', volume: 300 },
        { time: '16:56:09', volume: 310 },
        { time: '16:56:09', volume: 320 },
        { time: '16:56:10', volume: 330 },
        { time: '16:56:10', volume: 340 },
        { time: '16:56:10', volume: 350 },
        { time: '16:56:10', volume: 360 },
        { time: '16:56:11', volume: 367 },
        { time: '16:56:11', volume: 377 },
        { time: '16:56:11', volume: 380 },
        { time: '16:56:11', volume: 390 },
        { time: '16:56:10', volume: 390 },
        { time: '16:56:11', volume: 400 },
        { time: '16:56:11', volume: 420 },
        { time: '16:56:11', volume: 430 },
        { time: '16:56:11', volume: 440 },
        { time: '16:56:12', volume: 443 },
        { time: '16:56:12', volume: 445 },
        { time: '16:56:12', volume: 446 },
        { time: '16:56:12', volume: 450 },
        { time: '16:56:12', volume: 455 },
        { time: '16:56:13', volume: 492 },
        { time: '16:56:13', volume: 495 },
        { time: '16:56:13', volume: 497 },
        { time: '16:56:13', volume: 500 },
        { time: '16:56:13', volume: 520 },
        { time: '16:56:14', volume: 556 },
        { time: '16:56:14', volume: 557 },
        { time: '16:56:14', volume: 567 },
        { time: '16:56:14', volume: 580 },
        { time: '16:56:14', volume: 589 },
        { time: '16:56:15', volume: 592 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        { time: '16:56:15', volume: 600 },
        
      ]; */ 

      const data03 =  [
        { "time": "16:55:54", "volume": 0 },
          { "time": "16:55:54", "volume": 3 },
          { "time": "16:55:54", "volume": 4 },
          { "time": "16:55:54", "volume": 5 },
          { "time": "16:55:55", "volume": 6 },
          { "time": "16:55:55", "volume": 7 },
          { "time": "16:55:55", "volume": 10 }
  ];


      const initialState = {
        data03,
        opacity: 1,
        anotherState: false,
      };
      const renderSpecialDot: React.FunctionComponent<any> = (props: any) => {
        const { cx, cy, stroke, key } = props;
      
        if (cx === +cx && cy === +cy) {
          return <path d={`M${cx - 2},${cy - 2}h4v4h-4Z`} fill={stroke} key={key} />;
        }
      
        return null;
      };
class VerResultados extends Component<any, any> {
    state = initialState;
    
    componentDidMount(){
     const ejercicios = this.props.ejercicios.filter(p=>p._id == this.props.id_ejercicio );    
     this.setState(ejercicios[0]);
     console.log(this.props.ejercicios);
     console.log(this.props._id);
     console.log(ejercicios);

    }
    render() {
        const { data03, opacity } = this.state;
        return (
        <div>
        <MenuNav/>
        <Grid style={{ marginTop: '7em' }} columns={1}>
            <Grid.Column>
            <Segment raised>
                <Label color='green' ribbon>
                Resultados
                </Label>
               
                <div align= "center">
                <p>Gráficas de Flujo Respiratorio</p>
                </div>
                <p>Curva Volumen-Tiempo</p>
                
        <div className="line-chart-wrapper">
          <LineChart
            width={600} height={400} data={data03}
            margin={{ top: 40, right: 40, bottom: 20, left: 10 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="time" label={false} />
            <YAxis domain={['auto', 'auto']} label={{ value: 'Volumen', angle: -90, position: 'insideLeft' }} />
            <Tooltip
              wrapperStyle={{
                borderColor: 'white',
                boxShadow: '2px 2px 3px 0px rgb(204, 204, 204)',
              }}
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              labelStyle={{ fontWeight: 'bold', color: '#666666' }}
            />
            <Line dataKey="volume" stroke="#ff7300" dot={false} />
            <Brush dataKey="time" startIndex={data03.length - 40}>
              <AreaChart>
                <CartesianGrid />
                <YAxis hide domain={['auto', 'auto']} />
                <Area dataKey="volume" stroke="#ff7300" fill="#ff7300" dot={false} />
              </AreaChart>
            </Brush>
          </LineChart>
        </div>
        
                <List>
                    
                   
                    <List.Item style={{ marginTop: '1em' }}>    
                    <List.Content>
                        <List.Header></List.Header>
                        <List.Description>
                            <Link to="/VerRecomendaciones"><Button primary >Recomendaciones</Button></Link>
                            <Link to="/VerNovedades"><Button primary >Novedades</Button></Link>
                            <Link to={`/VerCultivos/${this.state.id_user}`}><Button >Regresar</Button></Link>
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
        ejercicios: state.ejercicios.ejercicios
    };
}
export default connect(mapStateToProp,null)(VerResultados);
