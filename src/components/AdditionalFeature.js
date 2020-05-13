import React from 'react';
import { connect } from 'react-redux';

import { addFeatures } from './actions/action';

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

const mapPropsToState = state => {
  return {
    features: state.car.features
  }
}

export default connect(mapPropsToState, { addFeatures }
)(AdditionalFeature);
