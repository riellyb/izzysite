import React from 'react'
import Link from 'gatsby-link'
import image1 from '../../images/page1-1.jpg'
import image2 from '../../images/page1-2.jpg'
import image3 from '../../images/page1-3.jpg'

const Page1 = () => (
  <div className="slide-inner">
    <h1>recollections:</h1>
    <p>“Recollections” is a concept for a wellness kit that helps the user reconstruct their own nostalgic memories. This is one of a series of four, each based around a  different season. Focused on sensory stimulants, it includes a postcard book, an Mp3 player with ambient sounds, four “scent vials”, and a blindfold. </p>
	<img src={image1} />
	<img src={image2} />
	<img src={image3} />
  </div>
)

export default Page1