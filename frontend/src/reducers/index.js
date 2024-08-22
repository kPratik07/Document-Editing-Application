import { combineReducers } from "redux";
import authReducer from "./authReducer";
import documentReducer from "./documentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  documents: documentReducer,
  // Add other reducers here
});

export default rootReducer;
