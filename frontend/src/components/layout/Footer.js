import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import loveIcon from './love.svg'
import PropTypes from 'prop-types'

const styles = theme => ({
  container: {
    textAlign: 'center',
    color: 'rgb(88, 88, 88)',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    fontSize: '80%'
  },
  copy: {
    marginLeft: 10
  }
})

class Footer extends Component {
  renderCopyright () {
    const year = new Date().getFullYear()
    const range = year > 2018 ? `2018-${year}` : year
    return <span className={this.props.classes.copy}>
      © {range}
    </span>
  }
  render () {
    const { classes } = this.props
    return <div className={classes.container}>
      Made with
      <img src={loveIcon} alt='love' height={14} />
      by <a href='https://github.com/pjhl'><strong>PJHL</strong></a>
      {this.renderCopyright()}
    </div>
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
