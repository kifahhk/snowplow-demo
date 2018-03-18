import React, {Component} from 'react';

class Page1 extends Component {
	componentDidMount() {
		console.log('page 1 mounted');
		window.snowplow('trackPageView');
	}
	render() {
		return(
			<h1>This is Page One</h1>
		);
	}
}

export default Page1;
