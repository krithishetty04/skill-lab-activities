"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import krithiImage from "./krithi.jpg";
import reshmaImage from "./reshma.jpg";
import sahanaImage from "./sahana.jpg";


function ProfileCard({ name, role, image, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      style={{
        backgroundColor: "#d6fa46",
        padding: "30px",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        textAlign: "center",
        width: "260px",
        cursor: "pointer",
      }}
    >
      <h2
        style={{
          fontWeight: "bold",
          color: "black",
          fontSize: "22px",
          marginBottom: "15px",
        }}
      >
        LinkedIn Profile
      </h2>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Image
            src={image}
            alt={name}
            width={120}
            height={120}
            style={{
              borderRadius: "50%",
              border: "3px solid #000",
              objectFit: "cover",
            }}
          />
        </motion.div>
      </div>

      <h3 style={{ marginTop: "12px", fontWeight: "bold", color: "#111" }}>
        {name}
      </h3>

      <p style={{ fontSize: "16px", color: "#000", marginTop: "6px" }}>
        {role}
      </p>

      <Link
        href={link}
        target="_blank"
        style={{
          display: "inline-block",
          marginTop: "14px",
          padding: "8px 14px",
          backgroundColor: "#000",
          color: "white",
          borderRadius: "8px",
          fontWeight: "bold",
          textDecoration: "none",
        }}
      >
        Visit Profile
      </Link>
    </motion.div>
  );
}

export default function Page() {
 
  const profiles = [
    {
      name: "Krithi S Shetty",
      role: "Information Science Student 🚀",
      image: krithiImage,
      link: "https://www.linkedin.com",
    },
    {
      name: "Reshma",
      role: "Information Science Student 🚀",
      image: reshmaImage,
      link: "https://www.linkedin.com",
    },
    {
      name: "Sahana K",
      role: "Information Science Student 🚀",
      image: sahanaImage,
      link: "https://www.linkedin.com",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        fontFamily: "Times New Roman, Times, serif",
        padding: "20px",
      }}
    >
      {/*  Welcome */}
      <h1
        style={{
          textAlign: "center",
          fontWeight: "bold",
          color: "black",
          fontSize: "32px",
        }}
      >
        Welcome to my Next.js App!
      </h1>

      {/*  Cards Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
}