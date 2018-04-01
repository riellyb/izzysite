import React from 'react'
import Link from 'gatsby-link'
import logo from '../../images/logo.svg'
import Modal from 'react-modal'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import AboutPage from '../../pages/about'
import ContactPage from '../../pages/contact'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isPaneOpen: false,
        about: true
    };
  }
  componentDidMount() {
    Modal.setAppElement(this.el);
  }
  render () {
      return <div
      className="header-container" ref={ref => this.el = ref}
    >
      <div className="header-logo">
        <img src={logo} alt="Izzy Washburn's Logo" />
      </div>
      <nav>
      <ul className="header-nav">
      <li><Link
            to="/" onClick={() => this.setState({ isPaneOpen: false })}        
          >
            work
          </Link>
      </li>
      <li><a
            onClick={() => this.setState({ isPaneOpen: true, about: true })}
          >
            about
          </a>
      </li>
      <li><a
            onClick={() => this.setState({ isPaneOpen: true, about: false })}
          >
            contact
          </a>
      </li>
          </ul>
      </nav>
       <SlidingPane
          className='slide-pane'
          overlayClassName='slide-page-overlay'
          isOpen={ this.state.isPaneOpen }
          from='left'
          width='50%'
          onRequestClose={ () => {
              this.setState({ isPaneOpen: false });
          } }
          onAfterOpen={ () => {

          } }>

          <div>{this.state.about ? <AboutPage /> : <ContactPage />}</div>
      </SlidingPane>
    </div>
  }
}

export default Header
