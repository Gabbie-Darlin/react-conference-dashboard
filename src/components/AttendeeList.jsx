import { useState } from "react";
import AttendeeCard from "./AttendeeCard";
import "../styles/AttendeeList.css";

function AttendeeList() {
    const [attendees, setAttendees] =
        useState([
            {
                id: 1,
                name: "John Smith",
                role: "Frontend Developer",
                registered: true,
            },
            {
                id: 2,
                name: "Sarah Johnson",
                role: "Backend Developer",
                registered: true,
            },
            {
                id: 3,
                name: "David Brown",
                role: "Full Stack Developer",
                registered: true,
            },
            {
                id: 4,
                name: "Emily Wilson",
                role: "UI/UX Designer",
                registered: true,
            },
        ]);

    const handleToggleStatus = (id) => {
        const updatedAttendees =
            attendees.map((attendee) =>
                attendee.id === id
                    ? {
                        ...attendee,
                        registered:
                            !attendee.registered,
                    }
                    : attendee
            );

        setAttendees(updatedAttendees);
    };

    const registeredCount =
        attendees.filter(
            (attendee) =>
                attendee.registered
        ).length;

    return (
        <div className="attendee-list">
            <div className="stats-card">
                <h2>
                    Registered Attendees:
                    {" "}
                    {registeredCount}
                </h2>
            </div>

            <div className="attendee-grid">
                {attendees.map((attendee) => (
                    <AttendeeCard
                        key={attendee.id}
                        attendee={attendee}
                        onToggleStatus={
                            handleToggleStatus
                        }
                    />
                ))}
            </div>
        </div>
    );
}

export default AttendeeList;