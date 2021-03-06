import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Geocode from "react-geocode";



const API_KEY = 'hidden'




class MapContainer extends React.Component {

    state = {
        destinationLat: 0,
        destinationLng: 0
    }

    // state = {
    //     lat: 33.7174708,
            // lng: -117.8311428

    // }

  

    componentDidMount(){
        Geocode.setApiKey(API_KEY);
        Geocode.fromAddress(this.props.destination).then(
            response => {
              const { lat, lng } = response.results[0].geometry.location;
              
              
              this.setState({
                destinationLat: lat,
                destinationLng: lng
            }, () => {console.log("this is in set state:", this.state)})}
        )   
    } 

    

    render(){

        console.log("this is in render", this.state)

        const mapstyle = {
            width: '100%',
            height: '50vh'
        }
        

        return(
        
            this.state.destinationLat || this.state.destinationLng > 0 ? (

                <div style = {mapstyle}>

                    <Map google={this.props.google}
                        zoom={10}
                        style={mapstyle}
                        initialCenter={{
                            lat: this.state.destinationLat,
                            lng: this.state.destinationLng
                        }}>

                    </Map>
                    
            </div>
            ) : null
           
        )
    }
}


export default GoogleApiWrapper({

       apiKey: ('hidden')
})(MapContainer)
