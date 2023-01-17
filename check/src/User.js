import React from 'react'
import './User.css'


const User = ({user}) => {
  return (
    <div className="user-container">
      <ul>
        <li><label>Informations about user number : </label>{user.id}</li>
        <li>
          <label>Name :</label> {user.name}{" "}
        </li>
        <li>
          <label>User Name : </label> {user.username}
        </li>
        <li><label>E-mail :</label> {user.email}</li>
        <label>Address</label>
        <li><label>Street : </label>{user.address.street}</li>
        <li><label>Suite : </label>{user.address.suite}</li>
        <li><label>City : </label>{user.address.city}</li>
        <li><label>Lat : </label>{user.address.geo.lat}</li>
        <li><label>Ing : </label>{user.address.geo.lng}</li>
        <li><label>Phone Number : </label>{user.phone}</li>
        <li><label>Website : </label>{user.website}</li>
        <label>Campany's informations</label>
        <li><label>Company Name : </label>{user.company.name}</li>
        <li><label>Catch Phrase :</label>{user.company.catchPhrase}</li>
        <li><label>bs : </label>{user.company.bs}</li>
      </ul>
      {/* <div>{user.name}</div>
      <div>{user.username}</div> */}
      {/*<div>{user.email}</div>
      <div>{user.address.street}</div>
      <div>{user.address.suite}</div>
      <div>{user.address.city}</div>
      <div>{user.address.geo.lat}</div>

      <div>{user.address.geo.lng}</div>
      <div>{user.phone}</div>
      <div>{user.website}</div>
      <div>{user.company.name}</div>
      <div>{user.company.catchPhrase}</div>
      <div>{user.company.bs}</div>  */}
    </div>
  );
}

export default User