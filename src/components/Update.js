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

import {
  updatePersonList,
  removePersonData
} from '../store/actions/person'

class Update extends PureComponent {
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

  componentDidMount() {
    let {data} = this.props.person
    this.setState({
      nama: data.nama,
      umur: data.umur
    })
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
    let {data} = this.props.person
    this.props.personDis.updateList({
      id: data.id,
      nama: this.state.nama,
      umur: this.state.umur
    })
    this.props.personDis.removeData()
    this.setState({
      nama: '',
      umur: ''
    })
    this.props.setStage('add')
  }

  render() {
    let {nama, umur} = this.state
    return (
      <Card tag='form' className='mb-3' onSubmit={this.handleSubmit}>
        <CardHeader>
          Ganti
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
            Ganti
          </Button>
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    person: state.person
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    personDis: bindActionCreators({
      updateList: updatePersonList,
      removeData: removePersonData
    }, dispatch)
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Update)
