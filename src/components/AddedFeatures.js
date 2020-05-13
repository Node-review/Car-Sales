import React from 'react';
import { connect } from 'react-redux';

import { removeFeatures } from './actions/action';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature
              key={item.id}
              feature={item}
              removeFeatures={props.removeFeatures} />
          ))}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

const mapPropsToState = state => {
  return {
    features: state.car.features
  }
}

export default connect(
  mapPropsToState,
  { removeFeatures }
)(AddedFeatures);
