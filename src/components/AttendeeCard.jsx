function AttendeeCard(
     {
        AttendeeCard,
        onToggleStatus,
    }

) {
    return (
        <div className="card">

            <h3>{attendee.name}</h3>
            <p>{attendee.role}</p>

            <p>
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
   