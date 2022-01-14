import React, {Component} from 'react';
import { CardList } from './components/card-list/card-lisr.component';
import { SearchBox } from './components/search-box/search-box.comonent';
import './App.css';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monsters:[],
      searchFeald: ''
    }
  }

  handleChange = (e) =>{
    this.setState({searchFeald: e.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => this.setState({monsters: users}))
  }

  render(){

    const { monsters, searchFeald } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchFeald.toLowerCase())
      )
    return(
      <div className="App">
     
        <h1>Monsters Rolodex</h1>
        
        <SearchBox
        placeholder='search monster' 
        handleChange = {this.handleChange} 
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    )
  }
}

export default App;
