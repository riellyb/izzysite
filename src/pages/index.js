import React from 'react'
import Link from 'gatsby-link'
import Modal from 'react-modal'
import SlidingPane from 'react-sliding-pane'
import 'react-sliding-pane/dist/react-sliding-pane.css'
import AboutPage from '../pages/about'
import Page1 from '../components/Panels/page1'
import Page2 from '../components/Panels/page2'
import Page3 from '../components/Panels/page3'
import Page4 from '../components/Panels/page4'
import Page5 from '../components/Panels/page5'
import Page6 from '../components/Panels/page6'
import Page7 from '../components/Panels/page7'
import Page8 from '../components/Panels/page8'
import Page9 from '../components/Panels/page9'
import Page10 from '../components/Panels/page10'
import Page11 from '../components/Panels/page11'
import Page12 from '../components/Panels/page12'
import thumb1 from '../images/thumbs/thumb1.jpg'
import thumb2 from '../images/thumbs/thumb2.jpg'
import thumb3 from '../images/thumbs/thumb3.jpg'
import thumb4 from '../images/thumbs/thumb4.jpg'
import thumb5 from '../images/thumbs/thumb5.jpg'
import thumb6 from '../images/thumbs/thumb6.jpg'
import thumb7 from '../images/thumbs/thumb7.jpg'
import thumb8 from '../images/thumbs/thumb8.jpg'
import thumb9 from '../images/thumbs/thumb9.jpg'
import thumb10 from '../images/thumbs/thumb10.jpg'
import thumb11 from '../images/thumbs/thumb11.jpg'
import thumb12 from '../images/thumbs/thumb12.jpg'

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
    case '1':
        return <Page1 />; 
    case '2':
        return <Page2 />;
    case '3':
        return <Page3 />;
    case '4':
        return <Page4 />;
    case '5':
        return <Page5 />;
	case '6':
        return <Page6 />;
    case '7':
        return <Page7 />;
    case '8':
        return <Page8 />;
    case '9':
        return <Page9 />;
    case '10':
        return <Page10 />;
    case '11':
        return <Page11 />;
    case '12':
        return <Page12 />;
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
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '1' })} >
          				<img src={thumb1} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '2' })} >
          				<img src={thumb2} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '3' })} >
          				<img src={thumb3} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '4' })} >
          				<img src={thumb4} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '5' })} >
          				<img src={thumb5} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '6' })} >
          				<img src={thumb6} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '7' })} >
          				<img src={thumb7} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '8' })} >
          				<img src={thumb8} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '9' })} >
          				<img src={thumb9} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '10' })} >
          				<img src={thumb10} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '11' })} >
          				<img src={thumb11} />
          			</a>
				</div>
				<div className="work-item">
					<a onClick={() => this.setState({ isPaneOpen: true, paneContent: '12' })} >
          				<img src={thumb12} />
          			</a>
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