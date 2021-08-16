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
        paneContent: 'about'
    };
  }
  componentDidMount() {
    Modal.setAppElement(this.el);
  }
  panelContentSwitch() {
    switch (this.state.paneContent) {
      case 'about':
        return <AboutPage />; 
      case 'contact':
        return <ContactPage />;
      case 'test':
        return 'Testing';
      default:
       return <AboutPage />; 
    }
  }
  render () {
      return <div className="header-container" ref={ref => this.el = ref} >
      <div className="header-logo">
        <Link to="/" onClick={() => this.setState({ isPaneOpen: false })} ><img src={logo} alt="Izzy Rielly's Logo" /></Link>
      </div>
      <nav>
      <ul className="header-nav">
      <li><Link to="/" onClick={() => this.setState({ isPaneOpen: false })} >
            work
          </Link>
      </li>
      <li><a onClick={() => this.setState({ isPaneOpen: true, paneContent: 'about' })} >
            about
          </a>
      </li>
      <li><a onClick={() => this.setState({ isPaneOpen: true, paneContent: 'contact' })} >
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
          onRequestClose={ () => {
              this.setState({ isPaneOpen: false });
          } }
          onAfterOpen={ () => {

          } }>

          <div>{this.panelContentSwitch()}</div>
      </SlidingPane>
    </div>
  }
}

export default Header
