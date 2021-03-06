import cuid from "cuid";
import React from "react";
import { Segment, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventActions.js";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput.jsx";
import MyTextArea from "../../../app/common/form/MytextArea.jsx";
import MySelectInput from "../../../app/common/form/MySelectInput.jsx";
import { categoryData } from "../../../app/api/categoryOptions.js";
import MyDateInput from "../../../app/common/form/MyDateInput.jsx";

export default function EventForm({ match, history }) {
    const dispatch = useDispatch();
    const selectedEvent = useSelector((state) =>
        state.event.events.find((e) => e.id === match.params.id)
    );

    const initialValues = selectedEvent ?? {
        title: "",
        category: "",
        description: "",
        venue: "",
        date: "",
        city: "",
    };

    const validationSchema = Yup.object({
        title: Yup.string().required("You must provide a title"),
        category: Yup.string().required("You must provide a category"),
        description: Yup.string().required(),
        city: Yup.string().required(),
        venue: Yup.string().required(),
        date: Yup.string().required(),
    });

    return (
        <Segment clearing>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    selectedEvent
                        ? dispatch(updateEvent({ ...selectedEvent, ...values }))
                        : dispatch(
                              createEvent({
                                  ...values,
                                  id: cuid(),
                                  hostedBy: "Ivanica",
                                  attendees: [],
                                  hostPhotoURL: "/assets/user.png",
                              })
                          );
                    history.push("/events");
                }}
            >
                {({ isSubmitting, dirty, isValid }) => (
                    <Form className='ui form'>
                        <Header sub color='teal' content='Event Details' />
                        <MyTextInput name='title' placeholder='Event title' />
                        <MySelectInput
                            name='category'
                            placeholder='Event category'
                            options={categoryData}
                        />
                        <MyTextArea
                            name='description'
                            placeholder='Event description'
                            rows={3}
                        />
                        <Header
                            sub
                            color='teal'
                            content='Event Location Details'
                        />
                        <MyTextInput name='city' placeholder='Event city' />
                        <MyTextInput name='venue' placeholder='Event venue' />
                        <MyDateInput
                            name='date'
                            placeholderText='Event date'
                            timeFormat='HH:mm'
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm a'
                        />
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type='submit'
                            floated='right'
                            positive
                            content='Submit'
                        />
                        <Button
                        disabled={isSubmitting}
                            as={Link}
                            to='/events'
                            type='submit'
                            floated='right'
                            content='Cancel'
                        />
                    </Form>
                )}
            </Formik>
        </Segment>
    );
}
