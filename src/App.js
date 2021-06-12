import logo from './logo.svg';
import './App.css';
import Routes from './routes'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
function App() {
  return (
    <div className="App">
     		<Router>
						<div className="route-wrapper">
							{Routes.map((route, index) => (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									component={route.component}
								/>
							))}
						</div>
			</Router>
    </div>
  );
}

export default App;
