import React, { Component } from 'react'
import { getUserPage } from '../actions/users'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Profile extends Component {
  componentDidMount () {
    this.props.getUserPage(1) // TODO: Load current user page
  }
  render () {
    const { loading, data } = this.props
    if (loading) {
      return <div>Loading...</div>
    }
    return <div>{JSON.stringify(data, undefined, 2)}</div>
  }
}

Profile.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object
}

function mapToStateprops (state) {
  return {
    loading: state.users.loading,
    data: state.users.opened
  }
}

export default connect(mapToStateprops, {
  getUserPage
})(Profile)
