import { RECEIVE_DATA } from '../actions'

export default function headlines(state={}, action) {
  switch(action.type) {
    case RECEIVE_DATA:
      const { id, title, url, score, user, time, comments, trunc } = action
      const post = {
        id: id, 
        title: title,
        url: url,
        score: score,
        user: user,
        time: time,
        comments: comments,
        trunc: trunc,
      }
      return {
        ...state,
        [id]: post
      }
    default:
      return state
  }
}