import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        onClick={() => props.removeFeatures(props.feature)}
        className="button">X</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AddedFeature;
