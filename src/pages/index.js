import React from 'react'
import Link from 'gatsby-link'
import Modal from 'react-modal'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import OnePage from '../components/Panels/one'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isPaneOpen: false,
        paneContent: 'one'
    };
  }
  componentDidMount() {
    Modal.setAppElement(this.el);
  }
  panelContentSwitch() {
    switch (this.state.paneContent) {
      case 'one':
        return <OnePage />; 
      case 'contact':
        return <ContactPage />;
      case 'test':
        return 'Testing';
      default:
       return <AboutPage />; 
    }
  }
  render () {
  	return <div>
	    <h1>izzy washburn. graphic designer.</h1>
	    <div className="work-container">
	    	<div className="work-row">
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: 'one' })} >
						TestOne
          				<img src="https://via.placeholder.com/350x600" />
          			</a>
				</div>
				<div className="work-item">
					<img src="https://via.placeholder.com/350x400" />
				</div>
				<div className="work-item">
					<img src="https://via.placeholder.com/350x300" />
				</div>

	    	</div>
	    	<div className="work-row">
				<div className="work-item">
					<img src="https://via.placeholder.com/350x200" />
				</div>
				<div className="work-item">
					<img src="https://via.placeholder.com/350x400" />
				</div>
				<div className="work-item">
					<img src="https://via.placeholder.com/350x960" />
				</div>
	    	</div>

			<div className="work-row">
				<div className="work-item">
					<img src="https://via.placeholder.com/350x700" />
				</div>
				<div className="work-item">
					<img src="https://via.placeholder.com/350x250" />
				</div>
				<div className="work-item">
					<img src="https://via.placeholder.com/350x500" />
				</div>
	    	</div>
	    	<div className="work-row">
				<div className="work-item">
					<img src="https://via.placeholder.com/350x700" />
				</div>
				<div className="work-item">
					<img src="https://via.placeholder.com/350x250" />
				</div>
				<div className="work-item">
					<img src="https://via.placeholder.com/350x500" />
				</div>
	    	</div>

	    </div>
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

export default IndexPage