import React, { useEffect, useState } from "react";
import "./FollowersCard.css";
import { getAllUser } from "../../api/UserRequest";
import { Followers } from "../../Data/FollowersData";
import User from "../User/User";
import { useSelector } from "react-redux";
const FollowersCard = () => {
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);
  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);
  console.log("persons", persons);
  return (
    <div className="FollowerCard">
      <h3>People you may know</h3>
      {persons.map((person, index) => {
        if (person._id !== user._id) {
          return <User person={person} key={index} />;
        }
      })}
    </div>
  );
};

export default FollowersCard;
