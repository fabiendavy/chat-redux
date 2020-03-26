export default function(state = null, action) {
  if (state === undefined) {
    return null;
  }

  switch(action.type) {

    default:
      return state;
  }
}
