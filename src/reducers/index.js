const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        currentTheme: action.payLoad,
      };

    default:
      return state;
  }
};

export default reducer;
