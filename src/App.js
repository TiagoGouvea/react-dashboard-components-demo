import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Col, Row} from "react-flexbox-grid";

// Import it from @app-masters/react-dashboard-components
import {SimpleTextBox} from "./react-dashboard-components/src/";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Dashboard Components</h1>
                </header>
                <Row>
                    <Col md={4} style={{display: 'flex'}}>
                        <SimpleTextBox
                            title={90}
                            subTitle={"Sales today"}
                            boxStyle={{background: '#ff9c00'}}
                            titleStyle={{color:"white"}}
                            subTitleStyle={{fontWeight: '600'}}
                        />
                    </Col>
                    <Col md={4} style={{display: 'flex'}}>
                        <SimpleTextBox
                            title={3}
                            subTitle={"Days remaining"}
                            boxStyle={{background: '#c3c3c3'}}
                        />
                    </Col>
                    <Col md={4} style={{display: 'flex'}}>
                        <SimpleTextBox
                            title={"44%"}
                            subTitle={"Completed"}
                            boxStyle={{background: '#00ff51'}}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={2} style={{display: 'flex'}}>
                        <SimpleTextBox
                            title={90}
                            subTitle={"Recurring sales"}
                            boxStyle={{background: '#00d8ff'}}
                        />
                    </Col>
                    <Col md={2} style={{display: 'flex'}}>
                        <SimpleTextBox
                            title={3}
                            subTitle={"Clients"}
                        />
                    </Col>
                    <Col md={2} style={{display: 'flex'}}>
                        <SimpleTextBox
                            title={"44%"}
                            subTitle={"Lorem Ipsum"}
                        />
                    </Col>
                    <Col md={2} style={{display: 'flex'}}>
                        <SimpleTextBox
                            title={90}
                            subTitle={"Nothing"}
                        />
                    </Col>
                    <Col md={4} style={{display: 'flex'}}>
                        <SimpleTextBox
                            title={3}
                            subTitle={"Some more nothing"}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
