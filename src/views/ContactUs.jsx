import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out to us. We'll get back to you soon!");
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <div style={{ textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Contact Us</h2>
      <p>
        Have questions or need more information? Fill out the form below, and
        we’ll get in touch with you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ display: "block", margin: "0.5em auto", width: "100%" }}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{ display: "block", margin: "0.5em auto", width: "100%" }}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ display: "block", margin: "0.5em auto", width: "100%" }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "0.75em",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}