import React, { Component } from 'react';
import dogCeoApi from '../../services/dogCeoApi';

class Discover extends Component {

    state = {
        imageSource: ''
    }

    componentDidMount() {
        this.getRandomDog();
    }

    getRandomDog = () => {
        dogCeoApi
            .getRandomDog()
            .then((response) => {
                this.setState({
                    imageSource: response.data.message
                });
            });
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.imageSource === ''
                        ? (<p>No dogs were harmed in the making of this randomization</p>)
                        : (<img src={this.state.imageSource} alt="A Wonderful Pupper" />)
                }
            </div>
        )
    }
}

export default Discover;
