/* global fetch */

const grapqlEntrypoint = `http://${document.location.hostname}:8081/graphql`
const userFragment = `
id
name
username
avatar {
  medium
}
posts {
  author {
    name
    username
    avatar {
      small
    }
  }
  body
  date
  likes {
    total
    currentUserLiked
  }
}`

export const getUserPage = (id) => async dispatch => {
  const data = await fetch(grapqlEntrypoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
        user (id: "${id}") {
          ${userFragment}
        }
      }`
    })
  })
    .then(rawResponse => (rawResponse.json()))
    .then(response => response.data.user)
  dispatch({
    type: 'USER_PAGE_FETCH_SUCCESS',
    payload: data
  })
}
