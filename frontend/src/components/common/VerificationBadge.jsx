import React from "react";

const VerificationBadge = ({ isVerified }) => {
  if (!isVerified) return null;

  return (
    <div className="relative flex items-center">
      <div
        className="bg-white absolute rounded-full"
        style={{
          width: "10px", // Adjust the width and height as needed
          height: "10px",
          left: "10px", // Adjust position to match styling
        }}
      />
      <i
        className="ri-verified-badge-fill text-blue-500 ml-2 text-sm relative"
        style={{
          fontSize: "1rem", // Adjust size to match styling
        }}
      ></i>
    </div>
  );
};

export default VerificationBadge;
