import React from 'react';

class ContentList extends React.Component {
  render() {
    //console.log("CIEEE",this.props.post)
    var post = this.props.post.map(function(post,index){
      return <div className="card share col1" key={index} data-social="item">
        <div className="circle"  data-toggle="tooltip" title="Label" data-container="body">
          </div>
          <div className="card-header clearfix">
            <h5>{post.name}</h5>
            <h6>
              <span className="location semi-bold"><i className="fa fa-map-marker"></i> NYC, New York</span>
            </h6>
          </div>
          <div className="card-description">
            <p>{post.desc}</p>
          </div>
          <div className="card-content">
            <ul className="buttons ">
              <li>
                <a href="#"><i className="fa fa-expand"></i></a>
              </li>
              <li>
                <a href="#"><i className="fa fa-heart-o"></i></a>
              </li>
            </ul>
          </div>
          <div className="card-footer clearfix">
            <div className="time">{post.time}</div>
            <ul className="reactions">
              <li><a href="#">{post.comments} <i className="fa fa-comment-o"></i></a></li>
              <li><a href="#">{post.likes}K <i className="fa fa-heart-o"></i></a></li>
            </ul>
          </div>
        </div>

    })
    return(
      <div>
        {post}
      </div>
    )
  }
}

export default ContentList
