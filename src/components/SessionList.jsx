import { useState } from "react";
import "../styles/SessionList.css";

function SessionList() {
    const [sessions, setSessions] = useState([
        {
            id: 1,
            title: "React Fundamentals",
            room: "Room A",
            time: "09:00 AM",
            registered: false,
        },
        {
            id: 2,
            title: "Advanced Node.js",
            room: "Room B",
            time: "11:00 AM",
            registered: false,
        },
        {
            id: 3,
            title: "UI/UX Design Principles",
            room: "Room C",
            time: "02:00 PM",
            registered: false,
        },
    ]);

    const handleRegistration = (id) => {
        const updatedSessions = sessions.map(
            (session) =>
                session.id === id
                    ? {
                        ...session,
                        registered:
                            !session.registered,
                    }
                    : session
        );

        setSessions(updatedSessions);
    };

    return (
        <section className="sessions-section">
            <h2 className="sessions-title">
                Upcoming Sessions
            </h2>

            <div className="sessions-grid">
                {sessions.map((session) => (
                    <div
                        key={session.id}
                        className="session-card"
                    >
                        <h3>{session.title}</h3>

                        <p>
                            📍 {session.room}
                        </p>

                        <p>
                            🕒 {session.time}
                        </p>

                        <button
                            className={
                                session.registered
                                    ? "registered-session-btn"
                                    : "register-session-btn"
                            }
                            onClick={() =>
                                handleRegistration(
                                    session.id
                                )
                            }
                        >
                            {session.registered
                                ? "Registered"
                                : "Register"}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SessionList;