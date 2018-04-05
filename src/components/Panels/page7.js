import React from 'react'
import Link from 'gatsby-link'
import image1 from '../../images/page7-1.jpg'
import image2 from '../../images/page7-2.jpg'
import image3 from '../../images/page7-3.jpg'
import image4 from '../../images/page7-4.jpg'
import image5 from '../../images/page7-5.jpg'
import image6 from '../../images/page7-6.jpg'

const Page7 = () => (
  <div className="slide-inner">
    <h1>fringe:</h1>
    <p>The Great Salt Lake Fringe Festival is a theater festival that takes place in different venues across Salt Lake City. This promotional poster may also be used to reference information about different performances. </p>
	<img src={image1} />
	<img src={image2} />
	<img src={image3} />
	<img src={image4} />
	<img src={image5} />
	<img src={image6} />
  </div>
)

export default Page7