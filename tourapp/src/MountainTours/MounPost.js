import React from 'react'

const MounPost = ({articles}) =>{
    console.log(articles);
    const {title,mountain, image,price,reducere,date} = articles.fields
    console.log(image);
    return(
        
        <div className='post'>
            
            <div className='ofert'>
            <img src={image.fields.file.url} alt={title}/>
            <div className='back-oferts'>
            <p className='point'>{title}</p>
            <p className='point'>{mountain}</p>
            <p className='reducere'>{reducere}&euro;</p>
            <p className='price'>{price}&euro;</p>
            <p className='date'>{date}</p>

            </div>
            </div>
        </div>
    )
}
export default MounPost;