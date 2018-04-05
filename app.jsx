var styles = {color:'red'}

var Header = React.createClass({
	render:function(){
		return(
			<div>
			<h3>{this.props.name}</h3>
			<h2>This is Header Component</h2>
			</div>
			);
	}
});
var Footer = React.createClass({
	getInitialState:function(){
		return {
			user : 'My First React Application',
			id : '101'
		}
	},
	render:function(){
		setTimeout(()=>{this.setState({ user: 'Anil', id :'494'})},5000);
		return(
		<div>
			<h3>User is : {this.state.user}</h3>
			 <h3>Id is : {this.state.id}</h3>
		<h2>This is Footer Component</h2>
		</div>
		);
	}
});

var MyComponent = React.createClass({
	render:function(){
		return(
			<div>
			<Header name="Alex"/>
			<h2 style={styles}>Hello World</h2>
			
			<Footer name="John"/></div>
			);
		}
});
ReactDOM.render(
	<MyComponent/>, document.getElementById('content')
	);
