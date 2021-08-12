import { useEffect } from "react";
import { divIcon } from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';

import navlogo from "../assets/images/menu.png";
import brandlogo from "../assets/images/logo.png";
import maplogo from "../assets/images/map.png";
import GlobalStyle from "../assets/styles/global";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";

const MapView = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const dest = destloc.split(',')
        const destination = [parseFloat(dest[0]), parseFloat(dest[1]),destname]
        console.log(destination)
        
        setMarker( (prevState) => [...prevState, destination])
        setDestName("")
        setDestLoc("")
        console.log(marker)
    }
    const position = [22.3511148, 78.6677428]
    // [22.0511148, 78.1677428, "place 1"],[22.3511148, 78.6677428, "place 2"]
    const [marker, setMarker] = useState([])
    const iconMarkup = (destName) => renderToStaticMarkup(     
        <>
            <Image className="addDestImg" src={maplogo} alt="destination" />
            <span className="destName">{destName}</span> 
        </>
    );
    const customMarkerIcon = (destName) => divIcon({
      html: iconMarkup (destName),
    });
    
    const [destloc, setDestLoc] = useState([])
    const [destname, setDestName] = useState([])
    return ( 
    <GlobalStyle>
        <Form onSubmit={handleSubmit} className="form">
        <div className="navHeader">  
            <div  >
                <Image className='brandlogo' id='brandlogo' src={brandlogo} alt="trip" />
            </div>
            
            <div className="align-items-center">
                <input className="addDestText"onChange={(e) => setDestLoc(e.target.value) }  type="text" placeholder="Enter the lon,lat" />
                <br/>
                <input className="addDestText" onChange={(e) => setDestName(e.target.value)} type="text" placeholder="Desitnation Name"/>
            </div>
            <div>
            <Button type = "submit" className="addDest">
                            <span>Add</span>
                            <br/>
                            <Image className="addDestImg" src={navlogo} alt="destination" />
                    
                        </Button>
            </div>
            
        </div>
        </Form>
        
                              
        <hr className="separatorMenu"/>
        <MapContainer id="mapid" 
            center={position} 
            zoom={5} 
            // scrollWheelZoom={true} 
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}>
            <TileLayer 
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marker && marker.map((mark, key) => 
                
                <Marker key={key} position={[mark[0], mark[1]]}  icon={customMarkerIcon (mark[2])} >
                    <Popup>
                        {mark[2]} <br /> Easily customizable.
                        
                    </Popup>
                </Marker> 
            )}
            
         
        </MapContainer>
       
    </GlobalStyle> 
    );
}
 
export default MapView;<>

</>
