import React, {PureComponent} from 'react'
import {compose, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import {v4 as uuidv4} from 'uuid'

import {addPersonList} from '../store/actions/person'

class Add extends PureComponent {
  state = {
    nama: '',
    umur: ''
  }

  constructor(props) {
    super(props)
    this.changeNama = this.changeNama.bind(this)
    this.changeUmur = this.changeUmur.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeNama(e) {
    this.setState({
      nama: e.currentTarget.value
    })
  }

  changeUmur(e) {
    this.setState({
      umur: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.personDis.addList({
      id: uuidv4(),
      nama: this.state.nama,
      umur: this.state.umur
    })
    this.setState({
      nama: '',
      umur: ''
    })
  }

  render() {
    let {nama, umur} = this.state
    return (
      <Card tag='form' className='mb-3' onSubmit={this.handleSubmit}>
        <CardHeader>
          Tambah
        </CardHeader>
        <CardBody>
          <FormGroup>
            <Label for='nama'>
              Nama
            </Label>
            <Input
              placeholder='Nama'
              id='nama'
              value={nama}
              onChange={this.changeNama}
            />
          </FormGroup>
          <FormGroup className='mb-0'>
            <Label for='nama'>
              Umur
            </Label>
            <Input
              type='number'
              placeholder='Umur'
              id='umur'
              value={umur}
              onChange={this.changeUmur}
            />
          </FormGroup>
        </CardBody>
        <CardFooter>
          <Button type='submit' color='primary'>
            Tambah
          </Button>
        </CardFooter>
      </Card>
    )
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    personDis: bindActionCreators({
      addList: addPersonList
    }, dispatch)
  }
}

export default compose(
  connect(null, mapDispatchToProps)
)(Add)
