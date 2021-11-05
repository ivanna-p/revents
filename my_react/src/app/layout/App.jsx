import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboards";
import NavigationBar from "../../features/navigation/NavigationBar";
import HomePage from '../../features/home/HomePage';
import  EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from "../../features/events/eventForm/EventForm";
import { Routes, Route } from "react-router";

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
                {/* <EventDashboard
                    formOpen={formOpen}
                    setFormOpen={setFormOpen}
                    selectEvent={handleSelectEvent}
                    selectedEvent={selectedEvent}
                /> */}
                <Routes>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/events/' component={EventDashboard} />
                    <Route path='/event/:id' component={EventDetailedPage} />
                    <Route path='/createEvent' component={EventForm} />
                </Routes>
            </Container>
        </>
    );
}

export default App;
