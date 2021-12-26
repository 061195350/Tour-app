import React from 'react'
import { client } from '../client';
import Posts from './Posts';

class ContentFull extends React.Component{

    state = {article: []}
    
    componentDidMount(){
        client.getEntries()
        .then((response) =>{
            console.log(response.items)
            this.setState({
                article: response.items
            })
        })
        .catch(console.error())
    }

    render(){
        return(
            <div className='Aplication'>
                <div className='container'>
                    <main className='wrapper'>
                        <Posts posts={this.state.article}/>
                    </main>
                </div>
            </div>
        )
    }
}
export default ContentFull;