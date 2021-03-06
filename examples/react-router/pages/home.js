import * as React from 'react'
import { withRouter } from 'serlina-react-router'
import { withApollo } from 'serlina-apollo'
import { Route, Switch } from 'react-router-dom'

import client from '../apolloClient'

import About from '../views/Home/about'
import Index from '../views/Home/index'
import Posts from '../views/Home/posts'

class Home extends React.Component {

  render () {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path="/about" exact component={About} />
          <Route path="/posts" exact component={Posts} />
        </Switch>
      </div>
    )
  }
}

export default withApollo(withRouter(Home, {
  getUrl({ ctx }) {
    return ctx.url
  },
  basename: '/home'
}), client)
