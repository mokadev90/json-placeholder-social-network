import axios from 'axios';
import React, { useState, useEffect } from 'react';

export const UserCard = ({
  name,
  email,
  id,
  phone,
  username,
  website,
  address,
  company,
}) => {
  //const [img, setImg] = useState(null);

  /*   useEffect(() => {
    axios
      .get(
        'https://placeimg.com/150/150/people',
        {},
        { headers: { 'Access-Control-Allow-Origin': '*' } }
      )
      .then((res) => setImg(res.data));
  }, []); */

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-name">{name}</h3>
        <div className="card-ci">
          <h4 className="card-c">{company.name}</h4>
          <h4>{id}</h4>
        </div>
      </div>
      <hr className="hr hr-header" />
      <div className="card-body">
        <h4 className="card-username">User: {username}</h4>
        <p>Email: {email}</p>
      </div>
      {/* <hr className="hr hr-body" /> */}
      <div className="card-footer">
        <h4 className="card-address">Address: {address.city}</h4>
        <div className="card-block">
          <hr className="hr hr-footer" />
          <div className="card-misc">
            <h4 className="card-website">{website}</h4>
            <h4>{phone}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
