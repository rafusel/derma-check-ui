import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import OverviewPage from '../OverviewPage';
import AboutPage from '../AboutPage';
import MeasurePage from '../MeasurePage';
import SiteLayout from '../SiteLayout';

function App() {
  return (
    <Router>
      <SiteLayout>
        <Switch>
          <Route path="/measure">
            <MeasurePage />
          </Route>
          <Route path="/about" >
            <AboutPage />
          </Route>
          <Route path="/">
            <OverviewPage />
          </Route>
        </Switch>
      </SiteLayout>
    </Router>
  );
}

export default App;
