import Header from "./components/Header";
import AttendeeList from "./components/AttendeeList";
import SessionList from "./components/SessionList";
import SpeakerCard from "./components/SpeakerCard";
import "./styles/App.css";

function App() {

    const speakers = [
        {
            id: 1,
            name: "Ada Lovelace",
            topic: "The Future of Functional Programming",
            bio: "Pioneer of computer science and mathematical genius.",
            available: true
        },
        {
            id: 2,
            name: "Alan Turing",
            topic: "Machine Intelligence and the Limits of Computation",
            bio: "Father of theoretical computer science and artificial intelligence.",
            available: true
        },
        {
            id: 3,
            name: "Grace Hopper",
            topic: "Compilers: From Human Readable to Machine Code",
            bio: "Inventor of the first compiler and pioneer of programming languages.",
            available: false
        },
        {
            id: 4,
            name: "Linus Torvalds",
            topic: "Open Source and the Linux Kernel",
            bio: "Creator of the Linux kernel and the Git version control system.",
            available: true
        }
];
    return (
        <>
            <div>
                <h1>Conference Dashboard</h1>

                <Header />
                <AttendeeList />
                <SessionList />
                    <section>
                        <h2>Speakers</h2>

                        {speakers.map((speaker) => (
                            <SpeakerCard
                            key={speaker.id}
                            speaker={speaker}
                            />
                        ))}
                    </section>
            </div>
        </>
    );
}

export default App;