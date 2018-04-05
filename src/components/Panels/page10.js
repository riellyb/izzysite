import React from 'react'
import Link from 'gatsby-link'
import image1 from '../../images/page10-1.jpg'
import image2 from '../../images/page10-2.jpg'
import image3 from '../../images/page10-3.jpg'

const Page10 = () => (
  <div className="slide-inner">
    <h1>Toothpaste</h1>
	<img src={image1} />
	<img src={image2} />
	<img src={image3} />
  </div>
)

export default Page10