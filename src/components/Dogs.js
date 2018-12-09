import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './Loading';
import { currDog } from '../actions/dogsAction';
import { FadeTransform } from 'react-animation-components';

class Dogs extends Component {
  render() {
    const dogList = this.props.dogs.dogs ? this.props.dogs.dogs.map((dog, key) => {
      return (
        <div className="col-lg-4 col-md-4 col-xs-4 mb-4" key={key}>
          <FadeTransform in transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
          }}>
            <img onClick={() => this.props.currDog(key)} className="img-fluid img-thumbnail rounded" style={{ width: "300px", height: "300px", margin: "4px", display: 'block' }} src={dog} alt="Dogs" />
            <Link onClick={() => this.props.currDog(key)} to='/currdog' className="btn btn-outline-secondary btn-centered mr-3 mt-2">View</Link>
          </FadeTransform >
        </div>
      )
    }) : <Loading />;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Dogs List</h1>
            <Link to="/" className="btn btn-lg btn-info mr-2">Back</Link>
            <Link to="/carousel" className="btn btn-lg btn-info mr-2" >Carousel</Link>
            <hr />
          </div>
          {dogList}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  dogs: state.dogs
})

export default connect(mapStateToProps, { currDog })(Dogs)
