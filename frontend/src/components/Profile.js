import React, { Component } from 'react'
import { getUserPage } from '../actions/users'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import CreatePost from './CreatePost'
import PostsList from './PostsList'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  paperInner: {
    paddingLeft: 20,
    paddingRight: 20,
    margin: -12
  },
  head: {},
  avatarGrid: {
    width: 128 + 3 * theme.spacing.unit + 20,
    maxWidth: 128 + 3 * theme.spacing.unit + 20
  },
  name: {
    marginTop: 0,
    marginBottom: 6
  },
  username: {
    color: '#424242'
  },
  divider: {
    marginTop: 12,
    marginBottom: 12
  }
})

class Profile extends Component {
  componentDidMount () {
    this.props.getUserPage(1) // TODO: Load current user page
  }
  render () {
    const { loading, data, classes } = this.props
    if (loading) {
      return <div>Loading...</div>
    }
    return <Paper className={classes.root} elevation={1}>
      <div className={classes.paperInner}>
        <div className={classes.head}>
          <Grid container spacing={24}>
            <Grid item xs={3} className={classes.avatarGrid}>
              <img src={data.avatar.medium} width={128} height={128} alt='Avatar' />
            </Grid>
            <Grid item xs={3}>
              <h1 className={classes.name}>{data.name}</h1>
              <div className={classes.username}>@{data.username}</div>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <CreatePost />
          <PostsList />
        </div>
      </div>
    </Paper>
  }
}

Profile.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object,
  classes: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    loading: state.users.loading,
    data: state.users.opened
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, {
    getUserPage
  })
)(Profile)
