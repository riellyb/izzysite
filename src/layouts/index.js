import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
    <div className="page-wrapper">
      <Helmet
        title="izzy rielly. graphic designer."
        meta={[
          { name: 'description', content: 'Izzy Rielly is a designer and illustrator living and working in Boston. She is a graduate of the University of Utah design program. Her hobbies include eating, baking, watching TV, and bursting into song. She also enjoys birds, puns, and dogs.' },
          { name: 'keywords', content: 'Izzy Rielly, Graphic Designer, Design, Salt Lake City, Boston' },
        ]}
      />
      <Header />
      <div className="main">
        {children()}
      </div>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
