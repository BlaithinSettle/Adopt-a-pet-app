import React from 'react';
import SearchBox from './SearchBox';
import { navigate } from '@reach/router';

class SearchParams extends React.Component{
    //want the page to navigate to results page when clicked searcg 
    handleSearchSubmit(){
        navigate('/');
    }
    
    render(){
        return (
            <div className="search-route">
                <SearchBox search={this.handleSearchSubmit}/>
            </div>
        )
    }
}

export default SearchParams;