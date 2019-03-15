export const RECEIVE_DATA = 'RECEIVE_DATA'

export function handleInitialData() {
  let counter = 0
  return (dispatch) => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json") 
      .then((result) => result.json(result))
      .then((idArray) => (
          idArray.map(id => (
            fetch("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
              .then((result) => result.json(result))
              .then((result) => {
                let hostname = ''
                if (result.url) {
                  hostname = (new URL(result.url)).hostname.split('www.').join('');
                }
                dispatch(receiveDataAction(
                  counter++, 
                  result.title, 
                  result.url, 
                  result.score, 
                  result.by, 
                  result.time, 
                  result.descendants, 
                  hostname
                ))
              })
          ))
        )
    )
  }
}

function receiveDataAction (id, title, url, score, user, time, comments, trunc) {
  return {
    type: RECEIVE_DATA,
    id: id, 
    title: title,
    url: url,
    score: score,
    user: user,
    time: time,
    comments: comments,
    trunc: trunc,
  }
}