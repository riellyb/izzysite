import React from 'react'
import Link from 'gatsby-link'
import image1 from '../../images/page4-1.jpg'
import image2 from '../../images/page4-2.jpg'
import image3 from '../../images/page4-3.jpg'
import image4 from '../../images/page4-4.jpg'
import image5 from '../../images/page4-5.jpg'
import image6 from '../../images/page4-6.jpg'

const Page4 = () => (
  <div className="slide-inner">
    <h1>donuts:</h1>
    <p>Accordion booklet illustrating different words with flat illustration
over the same image of a donut. </p>
	<img src={image1} />
	<img src={image2} />
	<img src={image3} />
	<img src={image4} />
	<img src={image5} />
	<img src={image6} />
  </div>
)

export default Page4