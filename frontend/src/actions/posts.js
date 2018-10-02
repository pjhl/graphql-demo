/* global fetch */
import { getUserPage } from './users'

const grapqlEntrypoint = `http://${document.location.hostname}:8081/graphql`

export const createPost = (body) => async dispatch => {
  const data = await fetch(grapqlEntrypoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `mutation {
        addPost (body: "${body.replace('"', '\\"')}") {
          id
          author {
            id
          }
        }
      }`
    })
  })
    .then(rawResponse => (rawResponse.json()))
    .then(response => {
      if (!response.data.addPost) {
        throw new Error('Failed to create post')
      }
      return response.data.addPost
    })
  // Fetch an opened user
  dispatch(getUserPage(data.author.id))
}
