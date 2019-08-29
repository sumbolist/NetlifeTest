import React from 'react'

export default class ClientItem extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            showDetails: false
        }
    }

    render() {
        return (
            <div className="clientCard">
                <div className="clientAvatar" onClick={() => this.setState({showDetails: !this.state.showDetails})}>
                    <img src={this.props.client.avatar} />
                </div>
                {this.state.showDetails && <div className="clientDetails">
                    <h3>{this.props.client.name}</h3>
                    <h5>{this.props.client.jobTitle}</h5>
                </div>}
            </div>
        )
    }
}