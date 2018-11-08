import React from 'react';
import { Link } from '@reach/router';


class Pet extends React.Component{
  render(){
      const{ name, animal, breed, media, location, id}=this.props;
  let photos=[];
  if(media && media.photos && media.photos.photo){

    // will determine the size of the photo 
      photos= media.photos.photo.filter(photo => photo["@size"] === 'pn')
  } 
const hero = photos[0] ? photos[0].vallue : "http://placecorgi.com/300/300";
//if photo exists use photo else use placeholder image   
return (
      <Link to ={`/details/${id}`} className="pet">
        <div className="image-container">
            <img src={hero} alt={name}/>
        </div>

        <div className="info">
          <h1>{name}</h1>  
          <h2>{animal}-{breed}-{location}</h2>
          
        </div>

      </Link>
  )
  
  
  
    }  
}

export default Pet;
//writing a component in JSX (from createElement)