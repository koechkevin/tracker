import React from 'react';

class User extends React.Component {
  render() {
    const {
      name, active, click, index,
    } = this.props;
    return (
      <div className={`user ${active ? 'active' : ''}`}>
        <div className="img" onClick={click} id={index}>
          <img onClick={click} id={index}
            src="https://res.cloudinary.com/dbk8ky24f/image/upload/v1560329597/ygtpq5coyftfhymnypsq.png" alt="logo" />
        </div>
        <div className="name" onClick={click} id={index}>
          { name }
        </div>
        <div className="icon">
          <i className="material-icons" onClick={() => console.log('icon')}>
            more_vert
          </i>
        </div>
      </div>
    );
  }
}
export default User;
