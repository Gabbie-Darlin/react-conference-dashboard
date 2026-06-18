import "../styles/AttendeeCard.css"

function AttendeeCard(
    {
        attendee,
        onToggleStatus,
    }
) {
    return (
        <div className="attendee-card">

            <h3>{attendee.name}</h3>
            <p className="attendee-role">{attendee.role}</p>

            <p className="attendee-status">
                Status:
                {" "}
                <strong>
                    {
                        attendee.registered
                        ? "Registered"
                        : "Cancelled"
                    }
                </strong>
            </p>

            <button
                className={`attendee-button
                    ${attendee.registered
                    ? "registered-button"
                    : "cancelled-button"
                    } 
                `}
                onClick={() => onToggleStatus(attendee.id)}
            >
                {
                    attendee.registered
                    ? "Cancel Registration"
                    : "Register Again"
                }
            </button>
        </div>
    );
}

export default AttendeeCard;