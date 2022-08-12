import {Component} from "react";
import './style.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            gotData: false,
            moves: []
        }
        this.toggle = this.toggle.bind(this); // do not forget the last this
        this.getData = this.getData.bind(this);
    }

    toggle() {
        if (!this.state.gotData)
            this.getData();
        if (this.state.clicked === true)
            this.setState({clicked: false})
        else
            this.setState({clicked: true})
    }

    async getData() {
        const movesPromise = await fetch(this.props.url)
        const movesObj = await movesPromise.json()
        this.setState({
            gotData: true,
            moves: movesObj.moves.map(i => i.move.name)})
    }

    // /* Old way */
    // getData() {
    //     fetch(this.props.url)
    //         .then(res => res.json())
    //         .then(res => this.setState({moves: res.moves.map(i => i.move.name)}))
    // }


    render() {
        if (!this.state.clicked)
            return (
                <div className='card' onClick={this.toggle}>
                    <img src={this.props.img}/>
                    <h3>{this.props.name}</h3>
                </div>
            )
        else {
            const moveArray = this.state.moves.map(i => <li>{i}</li>);
            return (
                <div className='card moves' onClick={this.toggle}>
                    <div><h3>{this.props.name}'s Moves:</h3></div>
                    <ul>{moveArray}</ul>
                </div>
            )
        }
    }
}

export default Card;