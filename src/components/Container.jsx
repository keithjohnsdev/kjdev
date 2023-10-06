import React from "react";
import "../styles/Container.scss";
import PropTypes from "prop-types"

const Container = ({ children }) => {
  return (
    <div className="container">
        {children}
    </div>
  )
}

Container.propTypes = {
    children: PropTypes.node.isRequired, // Ensure 'children' is provided and is of type 'node'
  };

export default Container