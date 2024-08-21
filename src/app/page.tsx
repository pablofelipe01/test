"use client";
import VoiceRecorder from "../../components/VoiceRecorder";

export default function Home() {
  return (
    <div
      // style={{
      //   display: "flex",
      //   height: "100vh",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   flexDirection: "column",
      //   textAlign: "center",
      // }}
    >
    
      <div
        style={{
          padding: "20px",
          backgroundColor: "#000000",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <VoiceRecorder />
      </div>
    </div>
  );
}
