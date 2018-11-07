import React from 'react';
import pf, { ANIMALS } from 'petfinder-client';

const petfinder= pf({
    key: process.env.API_KEY,
    secret: process.env.API_SECRET
})

class SearchParams extends React.Component{
state={
    loaction: "Seattle, WA", //set location 
    animal:"",
    breed:"",
    breeds:[]
};
handleLocationChange = event => {
    this.setState({
        location: event.target.value 
        //value of event input 
    })
}
handleAnimalChange = event => {
    this.setState({
        animal: event.target.value,
        breed: ""
    }, 
    this.getBreeds);
}

handleBreedChange = event =>{
    this.setState({
        breed: event.target.value
    });
};

getBreeds(){
// if animal selected get breeds 
    if(this.state.animal){
petfinder.breed.list({animal: this.state.animal})
        .then(data => {
            if(
        data.petfinder && 
        data.petfinder.breeds && 
        Array.isArray(data.petfinder.breeds.breed)
        ){
            this.setState({
                breeds: data.petfinder.breeds.breed
            })
        } else{
            this.setState({breeds: []});
        }
        })
} else{
    this.setState({breeds: []})
}
}

render(){
    return(
        <div className="search-params">
            <label htmlFor="loaction">  
            Location
                <input 
                onChange={this.handleLocationChange}
                //use 'handle' infront of events - parameter 
                id="location"
                value={this.state.location}
                placeholder="Location"
                /> 
            </label>

            <lable htmlFor="animal">
                Animal 
                    <select 
                    onChange={this.handleAnimalChange}
                    onBlur={this.handleAnimalChange}
                    id="animal"
                    value={this.state.animal}
                    >
                    <option />
                    {
                        ANIMALS.map(animal =>(
                            <option key={animal} value={animal}>{animal}</option>
                        ))
                    }
                    />
                    </select>
            </lable>

            <label htmlFor="breed">
                    Breed
                    <select 
                    onChange={this.handleBreedChange}
                    onBlur={this.handleBreedChnage}
                    id="breed"
                    value={this.state.breed}
                    //disable if there is no drop down option 
                    disabled={this.state.breeds.length===0}>

                    <option />
                    
                    
                        {this.state.breeds.map(breed =>(
                            <option key={breed} value={breed}>
                            {breed}
                            </option>
                        ))}
                    
                    </select>
            </label>
            <button>submit</button>
        </div>
    )
}
}

export default SearchParams;

//options is empty- the alternative would be options with a placeholder that 
//contained an empty string - prettier collapses the string and uses 
// <option /> instead 