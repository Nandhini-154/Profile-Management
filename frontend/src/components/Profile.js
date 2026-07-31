import React, { useState } from "react";
import "./Profile.css";

function Profile({ person, editData, deleteData }) {

  const [like, setLike] = useState(0);
  const [follow, setFollow] = useState(false);

  function handleLike() {
    setLike(like + 1);
  }

  function handleFollow() {
    setFollow(!follow);
  }

  return (
    <div className="card">

      <h2>{person.name}</h2>

      <h4>{person.role}</h4>

      <p>{person.company}</p>

      <button onClick={handleLike}>
        ❤️ {like}
      </button>

      <button
        onClick={handleFollow}
        className={follow ? "follow-btn followed" : "follow-btn"}
      >
        {follow ? "Following" : "Follow"}
      </button>

      <button onClick={() => editData(person)}>
        Edit
      </button>

      <button onClick={() => deleteData(person._id)}>
        Delete
      </button>

    </div>
  );
}

export default Profile;