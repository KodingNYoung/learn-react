import React from 'react';
import { Link } from 'react-router-dom';

const E404 = (props) => {
    return (
      <div className="container text-center">
          <h4>Error 404: Page not found</h4>
          <p>Go back to <Link to="/">home</Link></p>
      </div>
    )
}



export default E404;