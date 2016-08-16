import React from 'react';
import ContentList from './ContentList';

class Content extends React.Component {
  render() {
    return(
      <div className="page-content-wrapper ">
       <div className="content">
         <div className="social-wrapper">
           <div className="social " data-pages="social">
             <div className="container-fluid container-fixed-lg sm-p-l-20 sm-p-r-20">
               <div className="feed">
                 <div className="day" data-social="day">
                   <ContentList post={this.props.post}/>
                 </div>
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
