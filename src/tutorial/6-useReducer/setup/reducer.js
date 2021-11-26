// reducer function
const reducer = (state, action) => {
  // action is what we passed on our dispatch call
  if (action.type === 'ADD_ITEM') {
    const newPeoples = [...state.people, action.payload];
    return {
      ...state,
      people: newPeoples,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return { ...state, isModalOpen: true, modalContent: 'please enter value' };
  }
  if (action.type === 'CLOSE_MODAL') {
    return { ...state, isModalOpen: false };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeoples = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeoples,
      isModalOpen: true,
      modalContent: 'item removed',
    };
  }
  throw new Error('no matching action type');
};

export default reducer;
