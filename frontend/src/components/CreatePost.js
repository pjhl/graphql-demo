import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createPost } from '../actions/posts'

const styles = theme => ({
  field: {
    display: 'block'
  }
})

class CreatePost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      body: ''
    }
  }
  handleChange (name) {
    return e => {
      this.setState({ [name]: e.target.value })
    }
  }
  submit (e) {
    e.preventDefault()
    const body = this.state.body
    if (body) {
      this.props.createPost(body)
      this.setState({body: ''})
    }
  }
  render () {
    const { classes } = this.props
    return (
      <form noValidate autoComplete='off' onSubmit={this.submit.bind(this)}>
        <TextField label='Add post'
          className={classes.field}
          value={this.state.body}
          onChange={this.handleChange('body')}
          margin='normal'
          multiline
          placeholder='Text' />
        <Button
          color='primary'
          variant='outlined'
          type='submit'>Add</Button>
      </form>
    )
  }
}

CreatePost.propTypes = {
  classes: PropTypes.object.isRequired
}

export default compose(
  connect(null, {
    createPost
  }),
  withStyles(styles)
)(CreatePost)
