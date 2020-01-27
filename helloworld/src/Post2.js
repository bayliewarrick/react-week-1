import React,{Component} from 'react';

class Post2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
           title: 'Introduction to Swift',
            body: 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.',
            comments:15,
            likes:45        
        }
    }

    render() {
        return (
            <div>
                    
                
                <h4>{this.state.title}</h4>
                <p>{this.state.body}</p>
                <p>Comments: {this.state.comments}</p>
                <p>Likes: {this.state.likes}</p>
                    
               
            </div>
        )
    }

}

export default Post2;