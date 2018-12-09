import React from 'react'
import spinner from '../img/spinner.gif';

export default function Spinner() {
  return (
    <div className="col-md-12 text-center">
      <img src={spinner} style={{ width: "200px", margin: "auto", display: 'block' }} alt="Loading..." />
      <hr />
    </div>
  )
}
