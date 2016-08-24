import React from 'react';
import ContentList from './ContentList';

class Content extends React.Component {
  render() {
    return(
      <div>
        <div className="page-content-wrapper">
           <div className="social-wrapper">
             <div className="social " data-pages="social">
                 <div className="feed">
                   <div className="day" data-social="day">
                     <ContentList post={this.props.post}/>
                   </div>
                 </div>
             </div>
           </div>
        </div>
      </div>
    )
  }
}

export default Content
