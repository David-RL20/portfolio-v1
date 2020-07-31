const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        currentTheme: action.payLoad,
      };
    case 'SET_LANGUAGE':
      return {
        ...state,
        currentLanguage: action.payLoad,
      };

    default:
      return state;
  }
};

export default reducer;
