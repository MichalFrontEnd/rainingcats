import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Base from './layouts/Base'

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Base}>            
            </Route>
            <Route exact path="/?:city+:unit">
              Resaults for:
            </Route>
            {/*<Route exact path="/searchres:city"></Route>*/}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
