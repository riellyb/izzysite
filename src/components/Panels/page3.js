import React from 'react'
import Link from 'gatsby-link'
import image1 from '../../images/page3-1.jpg'
import image2 from '../../images/page3-2.jpg'
import image3 from '../../images/page3-3.jpg'

const Page3 = () => (
  <div className="slide-inner">
    <h1>Red Vines</h1>
    <p></p>
	<img src={image1} />
	<img src={image2} />
	<img src={image3} />
  </div>
)

export default Page3