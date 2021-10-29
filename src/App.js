import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Base from './layouts/Base'

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path="/" component={Base} />            
          </Switch>
      </div>
    </Router>
  );
}

export default App;
