import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CurrDog extends Component {

  render() {
    const dogKey = this.props.dogs.dog;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 text-center mb-5 mt-5">
            <Link to="/" className="btn btn-lg btn-info mr-4">Back to Home</Link>
            <Link to="/dogs" className="btn btn-lg btn-info mr-4" >Back to Dogs</Link>
            <Link to="/carousel" className="btn btn-lg btn-info mr-2">Carousel</Link>
            <img className="img-thumbnail w-100 mt-5" src={this.props.dogs.dogs[dogKey]} alt="First slide" />
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  dogs: state.dogs
})

export default connect(mapStateToProps)(CurrDog) 
