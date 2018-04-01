import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
    <div className="page-wrapper">
      <Helmet
        title="Izzy Washburn's Portfolio"
        meta={[
          { name: 'description', content: 'Izzy Washburn\'s Portfolio' },
          { name: 'keywords', content: 'Izzy Washburn, Graphic Designer, Design, Salt Lake City' },
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
