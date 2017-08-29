import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Card} from 'antd'
import Search from 'components/search'

class App extends React.Component{

    render(){
        return (
            <div>
                <Row>
                    <Col span={12} offset={6}><Search/></Col>
                </Row>
                <Row type="flex" justify="space-around" >
                    <Col span={4}>
                        <Card style={{ width: 240, height: 240 }} bodyStyle={{ padding: 10 }}>
                            <p>图片</p>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card style={{ width: 240, height: 240 }} bodyStyle={{ padding: 10 }}>
                            <p>图片</p>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card style={{ width: 240, height: 240 }} bodyStyle={{ padding: 10 }}>
                            <p>图片</p>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card style={{ width: 240, height: 240 }} bodyStyle={{ padding: 10 }}>
                            <p>图片</p>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card style={{ width: 240, height: 240 }} bodyStyle={{ padding: 10 }}>
                            <p>图片</p>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));