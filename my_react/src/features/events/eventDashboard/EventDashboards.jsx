import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData";

export default function EventDashboard({formOpen, setFormOpen}) {
    const [events, setEvents] = useState(sampleData); //adding states
    
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen &&   //if formOpen is true then do whatever is right from it, this case only display EventForm if this is true
                <EventForm setFormOpen={setFormOpen}/>}
            </Grid.Column>
        </Grid>
    )
}