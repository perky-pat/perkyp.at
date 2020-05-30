import React from 'react'
import PropTypes from 'prop-types'
import Work from './Work'

function Works ({ works }) {
  return (
    <div className='row no-gutters py-md-4 px-md-4 px-2 py-2 px-sm-4'>
      <div id='works' className='col-12 col-md-8'>
        <div className='spacer' />
        <div className='inner row'>
          {works.map(work => {
            return <Work key={work.uid} {...work} isDetail={false} />
          })}
        </div>
      </div>
    </div>
  )
}

Works.propTypes = {
  works: PropTypes.array.isRequired
}

export default Works
