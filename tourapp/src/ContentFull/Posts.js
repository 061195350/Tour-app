import React from "react";
import Post from "./Post";

const Posts = ({posts}) => {
    return(
        <div>
            <h1 className='Sea-Text'>Vacanncees Tour</h1>
            {posts.map((article, index) => <Post article={article} key={index} />)}
        </div>
    )
}
export default Posts;