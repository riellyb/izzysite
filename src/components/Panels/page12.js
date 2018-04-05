import React from 'react'
import Link from 'gatsby-link'
import image1 from '../../images/page12-1.jpg'
import image2 from '../../images/page12-2.jpg'
import image3 from '../../images/page12-3.jpg'
import image4 from '../../images/page12-4.jpg'
import image5 from '../../images/page12-5.jpg'

const Page12 = () => (
  <div className="slide-inner">
    <h1>pluralsight rebrand:</h1>
    <p>Pluralsight is an online learning platform focused on fields in technology and development. They offer various tutorials and other services for learning coding, data analysis, creative software, and other tech-related fields. </p>
	<img src={image1} />
	<img src={image2} />
	<img src={image3} />
	<img src={image4} />
	<img src={image5} />
  </div>
)

export default Page12