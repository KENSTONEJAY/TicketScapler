import { Spinner } from 'react-bootstrap';
import React from "react";
import API from "../../utils/API";
import CommonComponent from "../Common";
{/* <img src={process.env.PUBLIC_URL + '/img/logo.png'} />; */ }
// import img from "../../img/giants.jpg"



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events:{
        sport: [],
        concert: [],
        theatre: [],
      },
      isLoading:false
     

    };
  }
  async componentWillMount() {
    let self = this;
    console.log('in moiunt')
    let events = await API.events('stateId=CT')
    console.log('events it true',events);
    let data = events.data;
    for (var i = 0; i < data.length; i++) {
      if (data[i].event_type === 'sport') {
        self.state.events.sport.push(data[i]);
      }
      if (data[i].event_type === 'concert') {
        self.state.events.concert.push(data[i]);
      }
      if (data[i].event_type === 'theatre') {
        self.state.events.theatre.push(data[i]);
      }

      
    }
    console.log('setting it true');
    this.state.isLoading =  true;
    this.props.history.push('/home');
  }
  render() {
    console.log('state',this.state.isLoading);
    if (!this.state.isLoading) {
      return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      );
    } else {
      return (
          <CommonComponent
              state= {this.state}
          />  
      );
    }
  }
};


export default Home;