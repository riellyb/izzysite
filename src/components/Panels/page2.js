import React from 'react'
import Link from 'gatsby-link'
import image1 from '../../images/page2-1.jpg'
import image2 from '../../images/page2-2.jpg'
import image3 from '../../images/page2-3.jpg'
import image4 from '../../images/page2-4.jpg'
import image5 from '../../images/page2-5.jpg'
import image6 from '../../images/page2-6.jpg'
import image7 from '../../images/page2-7.jpg'
import image8 from '../../images/page2-8.jpg'

const Page2 = () => (
  <div className="slide-inner">
    <h1>hot wheels:</h1>
    <p>A marketing refresh for Hot Wheels focused on imaginitive play. Materials include print advertisements, a product line, and branded social media content. </p>
	<img src={image1} />
	<img src={image2} />
	<img src={image3} />
	<img src={image4} />
	<img src={image5} />
	<img src={image6} />
	<img src={image7} />
	<img src={image8} />
  </div>
)

export default Page2