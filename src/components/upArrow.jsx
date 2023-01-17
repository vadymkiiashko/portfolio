import React from 'react'
import '../sass/components/upArrow.styles.scss'

const UpArrow = ({target}) => {
  return (
    <div className='up-arrow'>
        <a href= {`#${target}`}>
             <img
              src='../assets/img/banner/arrows/up_arrow.svg'
              alt='left arrow'
            />
        </a>
    </div>
  )
}

export default UpArrow
