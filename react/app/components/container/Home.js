import React from 'react';
import Header from './header/Header';
import Footer from './Footer';
import Content from './Content';
import Rebase from 're-base';

var newPost = [];

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    }
  }

  componentWillMount() {
    this.firebaseRef = new Firebase("https://on-demand-2.firebaseio.com/");
    this.firebaseRef.on("child_added", function(dataSnapshot) {
      var nextData = this.state.post.concat(dataSnapshot.val());
      //console.log(dataSnapshot.val());
      this.setState({
        post: nextData
      });
    }.bind(this))
  }


  render() {
    return(
      <div className="page-container">
        <Header />
        <Content post={this.state.post}/>
        <Footer />
      </div>
    )
  }
}

export default Home
