import React from "react";
import user from "../images/users.png";

const ContactCard = (props) => {
  const { id, name, email ,phone,DOB,address} = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <div>{DOB}</div>
        <div>{address}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
