import React from 'react';

class ContentList extends React.Component {
  // componentDidMount(ref) {
  //   const pict = this.pictRef.value;
  //   var p = document.getElementById("picture");
  //   if(pict!=null) {
  //     p.src = pict;
  //   }
  // }

  render() {
    var post = this.props.post.map(function(post,index){
      return <div className="card share col1" key={index} data-social="item">
        <div className="circle"  data-toggle="tooltip" title="Label" data-container="body">
          </div>
          <div className="card-header clearfix">
            <h5>
              {post.name} &nbsp; &nbsp; &nbsp; &nbsp;
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
              <i className="fa fa-star-o" aria-hidden="true"></i>
            </h5>
            <h6>
              <span className="location semi-bold"><i className="fa fa-map-marker"></i> {post.place}</span>
            </h6>
          </div>
          <div className="card-footer card-title clearfix">
            <span><strong>{post.title}</strong></span>
            <ul className="reactions">
              <li><a href="#">{post.comments} <i className="fa fa-comment-o">&nbsp; &nbsp;</i></a></li>
              <li><a href="#"><i className="fa fa-heart-o">&nbsp; &nbsp;</i></a></li>
              <li><a href="#"><i className="fa fa-share-alt"></i></a></li>
            </ul>
          </div>
          {/*<img id="picture" ref={(ref) => pictRef = post.pict} />*/}
          <img src={post.pict}/>
          <div className="card-description">
            <p className="hidepargh">{post.desc}</p>
          </div>
          <div className="card-footer clearfix">
            <div className="time">{post.time}</div>
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
