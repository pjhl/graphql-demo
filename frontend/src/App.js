import React, { Component, Fragment } from 'react'
import { Header, Footer } from './components/layout'
import Profile from './components/Profile'

class App extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <Profile />
        <Footer />
      </Fragment>
    )
  }
}

export default App
