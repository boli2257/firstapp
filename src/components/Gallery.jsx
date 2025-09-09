import React, { useState } from 'react'
import { galleryDataFromDatabase } from '../gallery'
export const Gallery = () => {
    const [gallery, setGallery] = useState(galleryDataFromDatabase)
    console.log(gallery);
    
  return (
    <div className='d-flex justify-content-center flex-column gap-3'>
      {gallery.map(obj=>
        <img id={obj.id} src={obj.url} alt="" />
      )}
    </div>
  )
}
