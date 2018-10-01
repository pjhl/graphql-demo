const mockUser = { id: '1' }

export const getUserPage = (id) => dispatch => {
  setTimeout(() => {
    dispatch({
      type: 'USER_PAGE_FETCH_SUCCESS',
      payload: mockUser
    })
  }, 1000)
}
