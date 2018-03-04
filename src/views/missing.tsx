import * as React from 'react'
import {Head, Page, Link} from '@components'
import {APP_TITLE} from '@config'

export class MissingView extends React.Component {
  private readonly title = `Not Found - ${APP_TITLE}`

  render() {
    return (
      <Page>
        <Head>
          <title>{this.title}</title>
        </Head>

        <div className="Missing">
          <h1 className="u-mb-">Page was not found</h1>
          <Link to="/">Back to home</Link>
        </div>

        <style jsx>{`
          .Missing {
            text-align: center;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
        `}</style>
      </Page>
    )
  }
}
