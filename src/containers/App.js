import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'
// destructure bcz mesh default yaane fina naaml aktr mn export la kaza objects

//we need memory in the app so we need state (description of app)
//object. State can change and affect our app. it lives in the parent component so it passes state to different components

//Props are simply things that come out of "state"

//smart components eendon state
class App extends Component {
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield:''
        }
    }

    /*
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())  // Add "return" before response.json()
        .then(users => {
            this.setState({robots:users});
        });
    }  
    */  

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>  this.setState({robots:users}));
    }  

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render(){
        const {robots, searchfield}=this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(robots.length === 0 /* !robots.length */){
            return <h1 className='tc f2'>loading</h1>
        }else{
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredRobots} /> 
                </Scroll>
            </div>
        );}
    }
}

export default App;