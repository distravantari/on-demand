import React from 'react';

class User extends React.Component {
  render() {
    return(
      <div className="visible-lg visible-md m-t-10">
           <div className="pull-left p-r-10 p-t-10 fs-16 font-heading">
             <span className="semi-bold">David</span> <span className="text-master">Nester</span>
           </div>
           <div className="dropdown pull-right">
             <button className="profile-dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <span className="thumbnail-wrapper d32 circular inline m-t-5">
               <img src="assets/img/profiles/avatar2x.jpg" alt="" data-src="assets/img/profiles/avatar2x.jpg" data-src-retina="assets/img/profiles/avatar_small2x.jpg" width="32" height="32"/>
           </span>
             </button>
           </div>
         </div>
    )
  }
}

export default User
