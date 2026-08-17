import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Information Form</h1>

      <label htmlFor="name">Name:</label>
      <br />
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
      />
      <br /><br />

      <label>Email:</label>
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
      />
      <br /><br />

      <label>Phone:</label>
      <br />
      <input
        type="tel"
        name="phone"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={handleChange}
      />
      <br /><br />

      <label>City:</label>
      <br />
      <input
        type="text"
        name="city"
        placeholder="Enter your city"
        value={formData.city}
        onChange={handleChange}
      />
      <br /><br />

      <h2>Entered Details</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>City:</strong> {formData.city}</p>
    </div>
  );
}

export default App;