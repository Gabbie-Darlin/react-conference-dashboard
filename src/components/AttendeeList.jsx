import {useState} from "react";
import AttendeeCard  from "./AttendeeCard";

function AttendeeList() {
    const [attendees, setAttendees] = useState(
        [
            {
                id: 1,
                name: "Anthony Smith",
                role: "Front-end Developer",
                registered: true
            },
            {
                id: 2,
                name: "Sarah Johnson",
                role: "Back-end Developer",
                registered: true
            },
            {
                id: 3,
                name: "Maria Brown",
                role: "Fullstack Developer",
                registered: true
            },
        ]
    );

    const handleToggleStatus = (id) => {

        const updatedAttendees = attendees.map((attendee) => 
            attendee.id === id
            ? {
                ...attendee,
                registered:
                !attendee.registered,
            }
            : attendee
        );

        setAttendees (updatedAttendees);
    };

    return (
        <>
            <h2>
                Attendees Registered:
                {" "}
                {
                    attendees.filter((attendee) => attendee.registered).length
                }
            </h2>

            {
                attendees.map((attendee) => {
                    <AttendeeCard
                        key={attendee.id}
                        attendee={attendee}
                        onToggleStatus={handleToggleStatus}
                    />
                })
            }
        </>
    )
}

export default AttendeeList;