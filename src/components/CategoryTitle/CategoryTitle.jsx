import React, { useContext } from 'react'
import { CustomContext } from '../../utils/Context'

const CategoryTitle = () => {
    const {category} = useContext(CustomContext)
  return (
    <span>
        {category === 'skirt' && 'юбки'}
    </span>
  )
}

export default CategoryTitle