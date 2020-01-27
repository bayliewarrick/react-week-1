import React, {Component} from 'react';

import './App.css';
import './HeadMSG.css';

import Header from './Header'
import Footer from './Footer'
import Welcome from './Welcome'
import Counter from './Counter'
import HOCnav from './HOCnav'
import HeadMSG from './HeadMSG'
import Post from './Post'
import Post2 from './Post2'

class App extends Component {


  render() {
    return (
      <div>
        <HOCnav />
        <HeadMSG />
        <Post />
        <Post2 />
      </div>
    )
  }
}

export default App;