import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <div className='hero container'>
        <div className='banner'>
            <h1>
                {title}
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi velit architecto blanditiis! Inventore itaque, porro pariatur dolorem in enim atque.
            </p>
        </div>
        <div className='banner'>
            <img src={imageUrl} alt='hero' className='animated-image'/>
            <span>
                <img src='./vector.png' alt='vector'/>
            </span>
        </div>
    </div>
  )
}

export default Hero