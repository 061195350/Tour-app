import React from 'react'
import { clients } from '../Clients'
import MounPosts from './MounPosts'

class MountainC extends React.Component{
    state = {
        articles: []
    }
    
    componentDidMount(){
        clients.getEntries()
        .then((response) =>{
            console.log(response.items)
            this.setState({
                articles: response.items
            })
        })
        .catch(console.error())
    }
    render(){
        return(
            <div className='Aplication'>
              <div className='container'>
                <main className='wrapper'>
                <MounPosts  posts={this.state.articles}/>
                </main>
              </div>
            </div>
        )
    }
}

export default MountainC;