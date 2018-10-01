const initialState = {
  opened: null,
  loading: true
}

export default function users (state = initialState, action) {
  switch (action.type) {
    case 'USER_PAGE_FETCH_SUCCESS':
      return {
        ...state,
        opened: action.payload,
        loading: false
      }
    default:
      return state
  }
}
