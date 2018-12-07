import { ADD_COURSE, EDIT_COURSE, FETCHED_COURSE } from './../action/types';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    
    case ADD_COURSE:
      return [...state, action.payload];
    
      case EDIT_COURSE:
      const newState = state.map((course)=>{
        if(course.title === action.payload.title){
          return action.payload
        }
        return course;
      })
      return [...newState];
    
      case FETCHED_COURSE:
      return [...action.payload];
    
      default:
      return state;
  }
}


