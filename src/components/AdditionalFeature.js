import React from 'react';

const AdditionalFeature = props => {
  console.log(props.features)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        onClick={() => props.addFeatures(props.feature)}
        className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
