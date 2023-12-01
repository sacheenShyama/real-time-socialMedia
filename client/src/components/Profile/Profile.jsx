import React from "react";
import "./Profile.css";
import ProfileLeft from "../ProfileLeft/ProfileLeft";
import ProfileCard from "../ProfileCard/ProfileCard";
import PostSide from "../PostSide/PostSide";
import RightSide from "../RightSide/RightSide";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>
      <RightSide/>
    </div>
  );
};

export default Profile;
