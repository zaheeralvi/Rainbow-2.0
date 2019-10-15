import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal'
class Popup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal>
        );
    }
}

export default Popup;