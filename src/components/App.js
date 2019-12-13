import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogsList from './HogsList'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       greased: false,
       hogArray: hogs
    }
    this.handleGreasedClick = this.handleGreasedClick.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  handleGreasedClick(){
    this.setState({greased: !this.state.greased})
  }

  handleSort(sortType){
    if(sortType === 'name'){
      let hogsToDisplay = hogs.sort((a,b) => a.name.localeCompare(b.name))
      this.setState({hogArray: hogsToDisplay})
    }else if(sortType === 'weight'){
      let hogToDisplay = hogs.sort((a,b) => a.weight - b.weight )
      this.setState({hogArray: hogToDisplay})
    }

  }
  


  render() {


    return (
      <div className="App">
          < Nav handleGreasedClick={this.handleGreasedClick} greased={this.state.greased} handleSort={this.handleSort}/>
          
          <HogsList hogs={this.state.hogArray} greasedStatus={this.state.greased}/>

      </div>
    )
  }
}

export default App;
