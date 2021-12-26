import React from 'react'
import './Style.css'

const Post = ({article}) =>{
    const {title, image,price,reducere,date} = article.fields
    console.log(image);
    return(
        
        <div className='post'>
            <div className='ofert'>
            <img src={image.fields.file.url} alt={title}/>
            
            <div className='back-oferts'>
            <a className='point'>{title}</a>
            <p className='reducere'>{reducere}&euro;</p>
            <p className='price'>{price}&euro;</p>
            <p className='date'>{date}</p>
        {/*
            <div className='detalies'>
            <p className='detali'>Iati o vacanta</p>
        </div>*/}
            
            </div>
            </div>
        </div>
    )
}
export default Post;