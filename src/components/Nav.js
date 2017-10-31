import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Nav extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      current: '',
      open: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  componentDidMount () {
    // Render email address
    const emailLink = $('.rj4kj325jn88dJ3HwwlP')[0]
    if (emailLink) {
      let email = emailLink.rel.replace('/', '@').replace('*', '.')
      const part = ['m', 'a', 'i', 'l', 't', 'o', ':']
      emailLink.href = part.join('') + email
      $(emailLink).text(email)
    }
  }

  toggleNav () {
    this.setState({
      open: !this.state.open
    })
  }

  updateBackClass (path) {
    return path === '/' ? 'hide' : ''
  }

  render () {
    const { location } = this.props
    const path = location.pathname

    return (
      <nav id='nav' className={this.state.open ? 'open' : null}>
        <Link className={this.updateBackClass(path) + ' back'} to='/'>
          <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
            <polygon points='40,5.8 34.3,0 10,25 34.3,50 40,44.2 21.4,25' />
          </svg>
        </Link>
        <div className='switch' onClick={this.toggleNav}>
          <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
            <path d='M50,28.57H28.57V50H21.43V28.57H0V21.43H21.43V0h7.14V21.43H50Z' />
          </svg>
        </div>
        <div className='popup' onClick={this.toggleNav}>
          <div className='inner'>
            <Link className='link' to='/'>
              Work
            </Link>
            <Link className='link' to='/bio'>
              Bio
            </Link>
            <div className='contact' dangerouslySetInnerHTML={{ __html: this.props.contactHtml }} />
          </div>
        </div>
        <div className='cover' onClick={this.toggleNav} />
      </nav>
    )
  }
}

module.exports = withRouter(Nav)
