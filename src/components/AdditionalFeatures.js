import React from 'react';
import { connect } from 'react-redux';

import { addFeatures } from './actions/action';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
            // addFeatures={props.addFeatures}
            />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

const mapPropsToState = state => {
  return {
    features: state.car.features,
  }
}

export default connect(
  mapPropsToState,
  { addFeatures }
)(AdditionalFeatures);
