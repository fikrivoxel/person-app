import React, {PureComponent} from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import Table from './components/Table'
import Add from './components/Add'
import Update from './components/Update'

class App extends PureComponent {
  state = {
    stage: 'add'
  }

  constructor(props) {
    super(props)
    this.setStage = this.setStage.bind(this)
  }

  setStage(val) {
    this.setState({
      stage: val
    })
  }

  render() {
    let {stage} = this.state
    return (
      <Container>
        <Row>
          <Col xs='12'>
            <h1 className='display-4'>
              Person CRUD
            </h1>
          </Col>
          <Col xs='12'>
            {
              stage === 'update' ? (
                <Update setStage={this.setStage}/>
              ) : (
                <Add/>
              )
            }
          </Col>
          <Col xs='12'>
            <Table setStage={this.setStage}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
