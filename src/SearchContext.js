import React from 'react';

/*React.createContext will create a provider and consumer component - 
 the provider makes information available and the consumer reads from the provider */
 const SearchContext= React.createContext({
    location: "Seattle, WA",
    animal: "",
    breed: "",
    breeds:[],
    handleAnimalChange(){},
    handleBreedChange(){},
    handleLocationChange(){},
    getBreeds(){}
 });

 export const Provider = SearchContext.Provider;
 export const Consumer = SearchContext.Consumer;