import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboards";
import NavigationBar from "../../features/navigation/NavigationBar";

function App() {
    const [formOpen, setFormOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    function handleSelectEvent(event) {
        setSelectedEvent(event);
        setFormOpen(true);
    }

    function handleCreateFormOpen() {
        setSelectedEvent(null);
        setFormOpen(true);
    }

    return (
        <>
            <NavigationBar setFormOpen={handleCreateFormOpen} />
            <Container className='main'>
                <EventDashboard
                    formOpen={formOpen}
                    setFormOpen={setFormOpen}
                    selectEvent={handleSelectEvent}
                    selectedEvent={selectedEvent}
                />
            </Container>
        </>
    );
}

export default App;
