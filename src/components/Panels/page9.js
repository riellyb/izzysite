import React from 'react'
import Link from 'gatsby-link'
import image1 from '../../images/page9-1.jpg'
import image2 from '../../images/page9-2.jpg'
import image3 from '../../images/page9-3.jpg'
import image4 from '../../images/page9-4.jpg'
import image5 from '../../images/page9-5.jpg'

const Page9 = () => (
  <div className="slide-inner">
    <h1>Pluralsight Brand Book</h1>
	<img src={image1} />
	<img src={image2} />
	<img src={image3} />
	<img src={image4} />
	<img src={image5} />
  </div>
)

export default Page9