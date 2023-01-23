import React, { useContext } from 'react'
import { CustomContext } from '../../../utils/Context'

const CatalogRow = () => {
    const {products} = useContext(CustomContext)
  return (
    <div className='catalog_row'>
        {
           products.data.map((item)=>(
            <div className='catalog__card'>
                <img src={`../${item.img}`} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <p>{item.price}</p>
            </div>
           )) 
        }
    </div>
  )
}

export default CatalogRow