import React from "react";

export default function AboutUs() {
  return (
    <div style={{ textAlign: "center" }}>
      <section>
        <h2>Our Mission</h2>
        <p>
          To provide a loving home for every cat in need and to connect them with
          compassionate families who will cherish them forever.
        </p>
      </section>

      <section>
        <h2>Our History</h2>
        <p>
          Since our founding, we have been dedicated to rescuing, rehabilitating,
          and rehoming cats from all walks of life. Our journey began with a small
          group of volunteers and has grown into a passionate community of animal
          lovers.
        </p>
      </section>
      <section>
        <h2>Our Team</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1em",
            textAlign: "center",
          }}
        >
          <div>
            <span style={{ fontSize: "2rem" }}>👩‍💼</span>
            <h3>Jimmy Joe</h3>
            <p>Manager</p>
          </div>

          <div>
            <span style={{ fontSize: "2rem" }}>👨‍🔧</span>
            <h3>Bobby</h3>
            <p>Volunteer</p>
          </div>

          <div>
            <span style={{ fontSize: "2rem" }}>👩‍🎓</span>
            <h3>Alice</h3>
            <p>CEO</p>
          </div>

          <div>
            <span style={{ fontSize: "2rem" }}>👨‍💼</span>
            <h3>Nick Fury</h3>
            <p>Director</p>
          </div>
        </div>
      </section>
    </div>
  );
}