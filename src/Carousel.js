import React from 'react';

class Carousel extends React.Component{

state={
    photos: [],
    active: 0 //show first image 
}
static getDerivedStateFromProps({media}){
    // props coming in from a parent 
 let photos=[];
 if (media && media.photos && media.photos.photo){
     photos= media.photos.photo.filter(photo => photo['@size']=== 'pn')
 //pn is size of photo that is going to be kept
    }   
 return { photos };
}

handleIndexClick= event => {
    this.setState({
        active: +event.target.dataset.index
        // + will convert from a string to a number 
    }) 
}

render(){
const {photos, active } = this.state;

return (
    <div className='carousel'>
    <img src={photos[active].value} alt="primary animal" />
    <div className="carousel-smaller">
    {photos.map((photo, index) => (
        <img 
        onClick={this.handleIndexClick}
        key={photo.value} 
        data-index={index}
        src={photo.value} 
        className={index === active ? 'active' : ''}
        alt="animal thumbnail"
        />
    ))}
    </div>
    </div>
);

}

}

export default Carousel;