import React,{Component} from 'react';

class Post extends Component {

    constructor(props) {
        super(props)

        this.state = {
           title: 'Hello WatchKit',
            body: 'Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.',
            comments:12,
            likes:124        
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

export default Post;