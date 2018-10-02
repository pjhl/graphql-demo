import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { compose } from 'redux'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import CommentIcon from '@material-ui/icons/Comment'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const styles = theme => ({
  container: {},
  card: {
    maxWidth: 600,
    marginBottom: 10
  },
  actions: {
    display: 'flex'
  }
})

class PostsList extends Component {
  handleExpandClick (e) {
    e.preventDefault()
    console.log('handleExpandClick')
  }
  render () {
    const { classes, records } = this.props
    return <div className={classes.container}>
      {records.map((record, index) => {
        return <div key={index}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <img src={record.author.avatar.small} alt='avatar' width={64} height={64} />
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={record.author.name}
              subheader={`@${record.author.username} on ${record.date}`}
            />
            <CardContent>
              <Typography component='p'>{record.body}</Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
              <IconButton aria-label='Like'
                color={record.likes.currentUserLiked ? 'primary' : 'default'}>
                <FavoriteIcon /> {record.likes.total}
              </IconButton>
              <IconButton aria-label='Like'>
                <CommentIcon /> 0
              </IconButton>
              <IconButton
                className={''}
                onClick={this.handleExpandClick.bind(this)}
                aria-expanded={false}
                aria-label='Show more'
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      })}
    </div>
  }
}

PostsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  records: PropTypes.array,
  classes: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    loading: state.users.loading,
    records: state.users.opened ? state.users.opened.posts : null
  }
}

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(PostsList)
