import React, { Component } from 'react'

export class HogTile extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hidden: false,
             clicked: false
        }

        this.makeName = this.makeName.bind(this)
        this.handleOnclick = this.handleOnclick.bind(this)
        this.handleHide = this.handleHide.bind(this)
        this.whatToShow = this.whatToShow.bind(this)
    }


    makeName(name) {
        return name.split(' ').join('_').toLowerCase()
    }

    handleOnclick(){
        this.setState({clicked: !this.state.clicked})
    }

    handleHide(){
        this.setState({hidden: !this.state.hidden})
    }

    whatToShow(){
        if(!this.state.clicked && !this.state.hidden){
           return <img onClick={this.handleOnclick} src={`./hog-imgs/${this.makeName(this.props.hog.name)}.jpg`}/>
        }else if(!this.state.clicked && this.state.hidden){
            return null
        }else if (this.state.clicked && !this.state.hidden){
            return <div onClick={this.handleOnclick} >
            Weight: {this.props.hog.weight} <br/>
            Specialty: {this.props.hog.specialty}<br/>
            Greased: {this.props.hog.greased ? 'Yes' : 'No'}
            </div>
        }
    }


    render() {
        // console.log(this.state.clicked)
        return (
            <div className='ui eight wide column'>
                <h2> {this.props.hog.name} </h2> <button onClick={this.handleHide}>{this.state.hidden ? 'Show Me' : 'Hide Me'}</button><br/>
                {this.whatToShow()}
            </div>
        )
    }
}

export default HogTile
