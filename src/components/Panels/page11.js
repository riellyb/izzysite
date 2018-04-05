import React from 'react'
import Link from 'gatsby-link'
import image1 from '../../images/page11-1.jpg'
import image2 from '../../images/page11-2.jpg'
import image3 from '../../images/page11-3.jpg'
import image4 from '../../images/page11-4.jpg'
import image5 from '../../images/page11-5.jpg'
import image6 from '../../images/page11-6.jpg'
import image7 from '../../images/page11-7.jpg'

const Page11 = () => (
  <div className="slide-inner">
    <h1>wayfinding/placemaking</h1>
    <p>A wayfinding and identity system for the Art and Art History building at the University of Utah. The shapes and use of transparency were inspired by the way that shafts of light fold over the different surfaces of the brutalist building. </p>
	<img src={image1} />
	<img src={image2} />
	<img src={image3} />
	<img src={image4} />
	<img src={image5} />
	<img src={image6} />
	<img src={image7} />
  </div>
)

export default Page11