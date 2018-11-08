import React from 'react';
import { ANIMALS } from 'petfinder-client';
import { Consumer } from './SearchContext';


class SearchBox extends React.Component{
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.search();
    }
render(){
    return(
        <Consumer>
       {context => (
            <div className="search-params">
            <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="location">  
            Location
                <input 
                onChange={context.handleLocationChange}
                //use 'handle' infront of events - parameter 
                id="location"
                value={context.location}
                placeholder="Location"
                /> 
            </label>

            <lable htmlFor="animal">
                Animal 
                    <select 
                    onChange={context.handleAnimalChange}
                    onBlur={context.handleAnimalChange}
                    id="animal"
                    value={context.animal}
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
                    onChange={context.handleBreedChange}
                    onBlur={context.handleBreedChange}
                    id="breed"
                    value={context.breed}
                    //disable if there is no drop down option 
                    disabled={context.breeds.length===0}>

                    <option />
                    
                    
                        {context.breeds.map(breed =>(
                            <option key={breed} value={breed}>
                            {breed}
                            </option>
                        ))}
                    
                    </select>
            </label>
            <button>submit</button>
            </form>
        </div>
       )}
        </Consumer>
    )
}
}

export default SearchBox;

//options is empty- the alternative would be options with a placeholder that 
//contained an empty string - prettier collapses the string and uses 
// <option /> instead 