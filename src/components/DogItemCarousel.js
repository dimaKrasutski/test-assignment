import React from 'react';

export default function DogItemCarousel(props) {
  return (
    <div key={props.key} className="carousel-item ">
      <img className="  img-thumbnail w-100 " src={props.dog} alt="First slide" />
    </div>
  )
}

