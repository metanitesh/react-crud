import { ADD_COURSE, EDIT_COURSE, FETCHED_COURSE } from './types';

export const createCourse = ({ title, author, category, length }) => ({
  type: ADD_COURSE,
  payload: {
    title,
    author,
    category,
    length
  }
});

export const editCourse = ({ title, author, category, length }) => ({
  type: EDIT_COURSE,
  payload: {
    title,
    author,
    category,
    length
  }
});

export const itemsFetchDataSuccess = ((items) =>{
  return  {
    type: FETCHED_COURSE,
    payload: items
  }
})

export const fetchCourses = ((url) => {
  return (dispatch => {

    fetch(url)
      .then((response) => {
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      
  })
})

export const addCourse = ((url, param) => {
  return (dispatch => {
    fetch(url, param)
      .then((response) => {
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(fetchCourses('http://localhost:5000/courses')))
      
  })
})