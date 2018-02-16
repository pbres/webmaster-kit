import * as React from 'react'
import * as Router from 'react-router-dom'
import {Head, Page, Input, Button, List, Message, Wrapper} from '../components'
import {isEmail, syncano, connect} from '../utils'
import {IStore} from '../types'
import {APP_TITLE, CSS} from '../constants'

interface Props extends Router.RouteComponentProps<{}> {
  store: IStore
}

export class IndexView extends React.Component<Props> {
  private readonly title = APP_TITLE

  render() {
    return (
      <Page>
        <Head>
          <title>{this.title}</title>
        </Head>

        <Wrapper>
          <div className="View">
            <h1 className="u-mb">Webmaster Kit</h1>

            <List horizontal spacing="sm">
              {this.props.store.userStore.isLoggedIn ? (
                <Router.Link to="/auth/logout">Sign out</Router.Link>
              ) : (
                <React.Fragment>
                  <Router.Link to="/auth/login">Sign in</Router.Link>
                  <Router.Link to="/auth/register">Create account</Router.Link>
                </React.Fragment>
              )}
            </List>
          </div>
        </Wrapper>

        <style jsx>{`
          .View {
            margin-left: auto;
            margin-right: auto;
            max-width: 480px;
            padding: ${CSS.spacing} 0;
          }
        `}</style>
      </Page>
    )
  }
}
