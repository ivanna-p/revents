import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboards";
import NavigationBar from "../../features/navigation/NavigationBar";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import { Route } from "react-router";

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
            <Route exact path='/' component={HomePage} />
            <Route
                path={"/(.+)"}
                render={() => (
                    <>
                        <NavigationBar setFormOpen={handleCreateFormOpen} />
                        <Container className='main'>
                            <Route
                                exact
                                path='/events'
                                component={EventDashboard}
                            />
                            <Route
                                path='/events/:id'
                                component={EventDetailedPage}
                            />
                            <Route path='/createEvent' component={EventForm} />
                        </Container>
                    </>
                )}
            />
        </>
    );
}

export default App;
