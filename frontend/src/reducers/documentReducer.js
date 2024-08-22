const initialState = {
  documents: [],
};

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DOCUMENT":
      return {
        ...state,
        documents: [...state.documents, action.payload],
      };
    default:
      return state;
  }
};

export default documentReducer;
