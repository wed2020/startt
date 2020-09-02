import React from "react";
import Exemple from "./components/map";
import { Card, Col, Row } from "antd";
import logo from "./logo.svg";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import Store from "./store";

function App() {
  return (
    <Provider store={Store}>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={12}>
            <Card bordered={true}>Card content</Card>
          </Col>
          <Col span={12}>
            <Card title="Der Verlauf" bordered={true}>
              Card content
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Maps" bordered={true} style={{ width: "300" }}>
              <Exemple />
            </Card>
          </Col>
          <Col span={12}>
            <Card
              title="Informationen"
              bordered={true}
              style={{ width: "300" }}
            >
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                </header>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Provider>
  );
}

export default App;
