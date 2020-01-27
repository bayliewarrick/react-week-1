import React,{Component} from 'react';

class HeadMSG extends Component {

    constructor(props) {
        super(props)

        this.state = {
           title: 'Curse of the Current Reviews',
           body: 'When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.' 
        }
    }

    render() {
        return (
            <div className="HeadMSG">
                    
                
                <h1>{this.state.title}</h1>
                <h5>{this.state.body}</h5>
                    
               
            </div>
        )
    }

}

export default HeadMSG;