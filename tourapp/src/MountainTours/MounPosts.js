import React from "react";
import MounPost from "./MounPost";

const MounPosts = ({posts}) => {
    return(
        <div>
            {posts.map((articles, index) =><MounPost article={articles} key={index}/>)}
        </div>
    )
}
export default MounPosts;