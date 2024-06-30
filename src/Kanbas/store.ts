import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsRuducer from "./Courses/Assignments/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsRuducer,
  },
});

export default store;