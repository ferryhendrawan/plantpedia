import ProfileItem from "../component/ProfileItem";
import React from "react";
import './Profile.css'


const data = [{username: 'ferryhendrawan', token:'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'}]


export default function Profile() {
    return (
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <div className="cardContainer">

          {data.map((item, index) => 
          <ProfileItem username={item.username} token={item.token} key={index}/>)}
        </div>
      </div>
    );
  }
  