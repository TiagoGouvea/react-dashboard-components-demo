import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Col, Row} from "react-flexbox-grid";

// Import it from @app-masters/react-dashboard-components
import {SimpleTextBox, RunningProgress} from "./react-dashboard-components/src/";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">React Dashboard Components</h1>
                </header>
                <p>Sample use of <a href="https://github.com/app-masters/react-dashboard-components">react-dashboard-components</a>, created by <a href='https://github.com/TiagoGouvea'>@TiagoGouvea</a> at <a href="https://github.com/app-masters">App Masters</a>.</p>
                <h1>SimpleTextBox</h1>
                <Row>
                    <Col md={4} style={{display: 'flex'}}>
                        <SimpleTextBox
                            title={90}
                            subTitle={"Sales today"}
                            boxStyle={{background: '#ff9c00'}}
                            titleStyle={{color: "white"}}
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
                            style={style.green}
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
                <h1>RunningProgress</h1>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <RunningProgress
                        title={"Tiago"}
                        value={90}
                    />
                    <RunningProgress
                        title={"Raquel"}
                        value={75}
                        barStyle={{backgroundColor: '#ff9c00'}}
                    />
                    <RunningProgress
                        title={"Heitor"}
                        value={55}
                        style={{
                            titleStyle:{
                                color: '#ff3800'
                            },
                            barStyle: {
                                backgroundColor: '#ff3800',
                                color: '#000'
                            },
                            backStyle: { backgroundColor: '#212121'}
                        }}
                    />
                    <RunningProgress
                        title={"Joca"}
                        value={15}
                        barStyle={{backgroundColor: '#ff3800'}}
                    />
                    <RunningProgress
                        title={"Reginaldo Costa"}
                        value={null}
                        barStyle={{backgroundColor: '#ff3800'}}
                    />
                </div>
            </div>
        );
    }
}


const style = {
    green: {
        boxStyle: {
            backgroundColor: '#1bff00'
        },
        titleStyle: {
            color: '#FFF'
        },
        subTitleStyle: {
            color: '#FFF'
        }
    }
};


export default App;
