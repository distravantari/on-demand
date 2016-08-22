import React from 'react';

class Uploader extends React.Component {
  render() {
    return(
      <div>
        <progress className="upload" value="0" max="100" id="uploader">0%</progress>
        <input className="upload" type="file" value="upload" id="fileButton"></input>
      </div>
    )
  }
}

export default Uploader
