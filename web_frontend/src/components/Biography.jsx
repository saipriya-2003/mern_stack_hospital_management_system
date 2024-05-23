import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className='banner'>
        <img src={imageUrl} alt='image not available'/>
        </div>
        <div className='banner'>
            <p>Biography</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, ex dicta eum fuga quaerat repellendus asperiores. Consectetur autem natus, dicta qui temporibus explicabo unde adipisci! Exercitationem a enim quo, dolorum perferendis itaque perspiciatis nobis nemo quaerat explicabo, illo dolor adipisci aliquam repellat culpa laboriosam suscipit ducimus quam molestiae voluptates blanditiis, atque quibusdam maxime? Totam voluptatum accusamus, reiciendis laudantium vero nam ipsum exercitationem unde eius deleniti recusandae perferendis modi similique et facere aliquid qui cum harum sunt repudiandae accusantium optio dolorum perspiciatis? Autem ratione iusto, maiores, nobis beatae nesciunt voluptatum quasi temporibus reprehenderit numquam labore tempora neque quod repellat itaque veritatis?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, dolor?</p>
         </div>
    </div>
  )
}

export default Biography