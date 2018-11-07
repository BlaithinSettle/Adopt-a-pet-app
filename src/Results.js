import React from 'react';

import pf from 'petfinder-client';
import  Pet from './Pet';

const petfinder= pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
})
 

class Results extends React.Component {
  
constructor (props){
    super(props);
    //define initial state
    this.state={ 
        pets:[]
    }
}

  componentDidMount(){
      petfinder.pet.find({output: "full", location: "New York, NY"})
    //when it is back from the API
    .then(data =>{
     let pets;
     //if pets exist
     if(data.petfinder.pets && data.petfinder.pets.pet){
         //check if array for multiple of object for single
         if(Array.isArray(data.petfinder.pets.pet)){
            pets = data.petfinder.pets.pet 
         } else{
             pets=[data.petfinder.pets.pet];
         }
     }else{
        //if no pets exist 
         pets=[]
     }
     this.setState({
         pets
     })
    });
    
    }
  
    render(){
  return (
      
     <div className="search">
         {this.state.pets.map(pet=>{
             let breed;
             if(Array.isArray(pet.breeds.breed)){
                 breed=pet.breeds.breed.join(', ')
             } else {
                 breed= pet.breeds.bread
             }
             return (
                 <Pet 
                 key={pet.id}
                 animal={pet.animal}
                 name={pet.name}
                 breed={pet.breed}
                 media={pet.media}
                 location={`${pet.contact.city}, ${pet.contact.state}`}
                 id={pet.id}
                 />
             )
         })}
     </div>
     
  );
  
    }
}


export default Results;
