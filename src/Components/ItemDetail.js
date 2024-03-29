import React from 'react'
import ItemCount from "./ItemCount";
const ItemDetail = ({item}) => {
  return (
 <div className='row'>
<div className='col-md-4 offset-md-4'>
   <img src={item.imagen} className='img-fluid'alt={item.name}/>
   <h2>{item.name}</h2>
   <p>{item.description}</p>
   <p> $ {item.prrice}</p>
   <p> Cantidad: {item.stock}</p>
</div>
<div>
   <ItemCount stockItems={10}/>
</div>
</div>
 )   
}

export default ItemDetail