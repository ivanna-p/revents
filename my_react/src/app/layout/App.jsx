import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboards";
import NavigationBar from "../../features/navigation/NavigationBar";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import { Route } from "react-router";
import Sandbox from "../../features/sandbox/Sandbox";

function App() {
    return (
        <>
            <Route exact path='/' component={HomePage} />
            <Route
                path={"/(.+)"}
                render={() => (
                    <>
                        <NavigationBar />
                        <Container className='main'>
                            <Route
                                exact
                                path='/events'
                                component={EventDashboard}
                            />
                            <Route
                                exact
                                path='/sandbox'
                                component={Sandbox}
                            />
                            <Route
                                path='/events/:id'
                                component={EventDetailedPage}
                            />
                            <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
                        </Container>
                    </>
                )}
            />
        </>
    );
}

export default App;
