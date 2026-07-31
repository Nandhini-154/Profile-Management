import React, { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";
import "../App.css";

function Register() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");

  const [people, setPeople] = useState([]);
  const [edit, setEdit] = useState(null);

//   useEffect(() => {
//     loadData();
//   }, []);

  async function loadData() {
    try {
      const response = await axios.get("http://localhost:5000/register");
      setPeople(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const person = {
      name,
      role,
      company,
    };

    
      if (edit) {
        await axios.put(
          `http://localhost:5000/register/${edit}`,
          person
        );
        setEdit(null);
      } else {
        await axios.post(
          "http://localhost:5000/register",
          person
        );
      }

      await loadData();

      setName("");
      setRole("");
      setCompany("");
    
  }

  function editData(person) {
    setEdit(person._id);
    setName(person.name);
    setRole(person.role);
    setCompany(person.company);
  }

  async function deleteData(id) {
   
      await axios.delete(`http://localhost:5000/register/${id}`);
      await loadData();
   
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Name</label>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <label>Role</label>

        <input
          type="text"
          placeholder="Enter your role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />

        <br/><br/>

        <label>Company</label>

        <input
          type="text"
          placeholder="Enter your company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <br/>

        <button type="submit">
          {edit ? "Update" : "Submit"}
        </button>

      </form>

      <br />

      <div className="profile">
        {people.map((person) => (
          <Profile
            key={person._id}
            person={person}
            editData={editData}
            deleteData={deleteData}
          />
        ))}
      </div>
    </div>
  );
}

export default Register;