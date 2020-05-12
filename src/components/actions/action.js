export const addFeatures = feature => {
  return { type: 'ADD_FEATURES', payload: feature }
}

export const removeFeatures = feature => {
  return { type: 'REMOVE_FEATURES', payload: feature }
}