import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard() {
    const [events, setEvents] = useState(sampleData); //adding states

    // function handleCreateEvent(event) {
    //     setEvents([...events, event]);
    // }

    // function handleUpdateEvent(updatedEvent) {
    //     setEvents(
    //         events.map((originalEvent) =>
    //             originalEvent.id === updatedEvent.id
    //                 ? updatedEvent
    //                 : originalEvent
    //         )
    //     );
    // }

    function handleDeleteEvent(eventId) {
        setEvents(events.filter((evt) => evt.id !== eventId));
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList
                    events={events}
                    deleteEvent={handleDeleteEvent}
                />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event Filters</h2>
            </Grid.Column>
        </Grid>
    );
}
