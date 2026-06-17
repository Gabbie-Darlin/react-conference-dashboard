import Header from "./components/Header";
import AttendeeList from "./components/AttendeeList";

function App() {
    return (
        <>
            <div>
                <h1>Conference Dashboard</h1>

                <Header />
                <AttendeeList />
            </div>
        </>
    );
}

export default App;