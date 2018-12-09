import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDogs } from '../actions/dogsAction';

class Home extends Component {

  componentDidMount = () => {
    if (!this.props.dogs.dogs) {
      this.props.getDogs();
    }
  }
  render() {
    return (
      <div className="landing" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 mb-4">Dogs Collection
            </h1>
              <p className="lead text-white">Click the button to watch our dog's collection</p>
              <hr />
              <Link to="/dogs" className="btn btn-lg btn-info mr-2">Dogs</Link>
              <Link to="/carousel" className="btn btn-lg btn-info mr-2">Carousel</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  dogs: state.dogs
})
export default connect(mapStateToProps, { getDogs })(Home);