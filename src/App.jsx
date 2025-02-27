import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ListAndFormPage() {
  const [listData, setListData] = useState([]);
  const [formData, setFormData] = useState({ name: "", price: "" });

  // Fetch the list from the backend (replace with your API endpoint)
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/items`)
      .then((response) => setListData(response.data))
      .catch((error) =>
        console.error("There was an error fetching the list!", error)
      );
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}/items/`, formData)
      .then((response) => {
        console.log("Form submitted successfully:", response);
        // Optionally update the list or handle success response
      })
      .catch((error) =>
        console.error("There was an error submitting the form!", error)
      );
  };

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>List of Items</h2>
      <ul>
        {listData.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>

      <h2>Submit a New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ListAndFormPage;
