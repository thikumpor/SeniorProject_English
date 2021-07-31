import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainLogin from './src/MainLogin'
import Dashboard from './src/componants/Dashboard'
import LogIn from './src/componants/Login'
import SignUp from './src/componants/SignUp'
import { AuthProvider } from './src/componants/Auth'
import Learning from './src/Learning/Learning'
import Grammar from './src/Learning/Grammar'
import Reading from './src/Learning/Reading'
import Vocabulary from './src/Learning/Vocabulary'
import Test from './src/Test/Test'
import Score from './src/Score/Score'
import Exercise from './src/Exercise/Exercise'
import ExGrammar from './src/Exercise/ExGrammar'
import ExReading from './src/Exercise/ExReading'
import ExVocabulary from './src/Exercise/ExVocabulary'
function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={MainLogin} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/Learning" component={Learning} />
          <Route exact path="/Grammar" component={Grammar} />
          <Route exact path="/Reading" component={Reading} />
          <Route exact path="/Vocabulary" component={Vocabulary} />
          <Route exact path="/Test" component={Test} />
          <Route exact path="/Score" component={Score} />
          <Route exact path="/Exercise" component={Exercise} />
          <Route exact path="/ExGRammar" component={ExGrammar} />
          <Route exact path="/ExReading" component={ExReading} />
          <Route exact path="/ExVocabulary" component={ExVocabulary} />



      
         
        </Switch>
      </Router>
    </AuthProvider>
    
  );
}

export default App;