import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = ({item}) => {
  return (
    <Link to={"/item/" + item.id} className='text-decoration-none'>
<div className='container'>
        <div className='card border border-0'>
          <img src= {item.imagen} className='card-img-top' alt={item.name}/>
           <div className='card-body text-center'>
            <p className='card-text'>{item.name}</p>
            <div>
   <ItemCount stockItems={10}/>
</div>
           </div>
        </div>
      </div>
    </Link>
  )
}

export default Item