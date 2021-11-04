import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard({
    formOpen,
    setFormOpen,
    selectEvent,
    selectedEvent,
}) {
    const [events, setEvents] = useState(sampleData); //adding states

    function handleCreateEvent(event) {
        setEvents([...events, event]);
    }

    function handleUpdateEvent(updatedEvent) {
        setEvents(
            events.map((originalEvent) =>
                originalEvent.id === updatedEvent.id
                    ? updatedEvent
                    : originalEvent
            )
        );
        selectEvent(null);
    }

    function handleDeleteEvent(eventId) {
        setEvents(events.filter((evt) => evt.id !== eventId));
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList
                    events={events}
                    selectEvent={selectEvent}
                    deleteEvent={handleDeleteEvent}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && ( //if formOpen is true then do whatever is right from it, this case only display EventForm if this is true
                    <EventForm
                        setFormOpen={setFormOpen}
                        setEvents={setEvents}
                        createEvent={handleCreateEvent}
                        selectedEvent={selectedEvent}
                        updateEvent={handleUpdateEvent}
                        key={selectedEvent ? selectedEvent.id : null}
                    />
                )}
            </Grid.Column>
        </Grid>
    );
}
