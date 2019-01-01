import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>


class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render(){
		return (
			<div className='container'>
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path='/' component={Landing} />
						<Route exact path='/surveys' component={Dashboard} />
						<Route path='/surveys/new' component={SurveyNew} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

//normally, we would create an action creator
// and then dispatch inside a map dispatch to props
// Each function inside mapdispatchtoprops
// is passed into our component's props
// so we could i.e. call this.props.fetchUser()

export default connect(null, actions)(App);