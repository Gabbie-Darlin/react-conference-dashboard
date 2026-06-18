import { useState } from "react";
import "../styles/SpeakerCard.css";

function SpeakerCard({ speaker }) {
  const [available, setAvailable] = useState(speaker.available);

  const toggleAvailability = () => {
    setAvailable(!available);
  };

  return (
    <div className="speaker-card">
      <h3>{speaker.name}</h3>

      <p className="speaker-topic">
        🎤 {speaker.topic}
      </p>

      <p>{speaker.bio}</p>

      <p
        className={
          available
            ? "speaker-status available"
            : "speaker-status unavailable"
        }
      >
        {available
          ? "✅ Available for Q&A"
          : "❌ Unavailable"}
      </p>

      <button
        className={
          available
            ? "unavailable-btn"
            : "available-btn"
        }
        onClick={toggleAvailability}
      >
        {available
          ? "Mark Unavailable"
          : "Mark Available"}
      </button>
    </div>
  );
}

export default SpeakerCard;