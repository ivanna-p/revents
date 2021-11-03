import React, {useState} from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboards';
import NavigationBar from '../../features/navigation/NavigationBar';

function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavigationBar setFormOpen={setFormOpen}/>
      <Container className='main'>
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
      </Container>
    </>
  );
}

export default App;
