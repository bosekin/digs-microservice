
import './App.css';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import ReleaseSchedule from './pages/release-schedule';
import ResourceSchedule from './pages/resource_schedule';
import Home from './pages/home';
import Ana_Snapshot from './pages/ana_snapshot';
import Gta_Messages from './pages/gta_messages';
import Primary_Workflow from './pages/primary_workflow';
import Secondary_Workflow from './pages/secondary_workflow';


function App() {
  return (
    <>
    <Router> 
    <Home />
      <Switch>
      primary_workflow
        <Route path='/primary_workflow'  component={Primary_Workflow}/>
        <Route path='/secondary_workflow'  component={Secondary_Workflow}/>
        <Route path='/gta_messages'  component={Gta_Messages}/>
        <Route path='/ana_snapshot'  component={Ana_Snapshot}/>
        <Route path='/release_schedule'  component={ReleaseSchedule}/>
        <Route path='/resource_schedule'  component={ResourceSchedule}/> 
      </Switch>
     </Router>

      
    </>
  );
}

export default App;
