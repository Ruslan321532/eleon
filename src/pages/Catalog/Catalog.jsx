import React, { useContext, useEffect } from 'react'
import { CustomContext } from '../../utils/Context'
import CatalogRow from './CatalogRow/CatalogRow'

const Catalog = () => {
      const {category, getProducts} = useContext(CustomContext)

  useEffect(()=> {
    getProducts()
  }, [])
  return (
    <section className='catalog'>
      <div className="container">
        <div className="catalog__left">
          <h2>Категории</h2>

          <h2>Колекции</h2>
        </div>
        <div className="catalog__right">
          <CatalogRow/>
        </div>
        
      </div>
    </section>
  )
}

export default Catalog