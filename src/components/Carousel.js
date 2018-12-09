import React, { Component } from 'react'
import DogItemCarousel from './DogItemCarousel';
import { connect } from 'react-redux';
import DogImgStart from '../img/dogStart.jpg';
import { Link } from 'react-router-dom';


class Carousel extends Component {
  render() {
    const dogsCarousel = this.props.dogs.dogs.map((dog, key) => {
      return (
        <DogItemCarousel key={key} dog={dog} />
      )
    })

    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="col-md-12 text-center">
          <h1 className="display-5 mb-3 mt-2">Dog's Carousel</h1>
          <Link to="/" className="btn btn-lg btn-info mr-4">Back to Home</Link>
          <Link to="/dogs" className="btn btn-lg btn-info mr-4" >Back to Dogs</Link>
          <hr />
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img className="  img-thumbnail w-100 " src={DogImgStart} alt="First slide" />
            </div>
            {dogsCarousel}
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  dogs: state.dogs
})

export default connect(mapStateToProps)(Carousel)
