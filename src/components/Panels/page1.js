import React from 'react'
import Link from 'gatsby-link'
import image1 from '../../images/page1-1.jpg'
import image2 from '../../images/page1-2.jpg'
import image3 from '../../images/page1-3.jpg'

const Page1 = () => (
  <div className="slide-inner">
    <h1>Recollections</h1>
    <p>test</p>
	<img src={image1} />
	<img src={image2} />
	<img src={image3} />
  </div>
)

export default Page1