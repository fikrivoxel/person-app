import React, {PureComponent} from 'react'
import {compose, bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Card,
  CardHeader,
  Table as RTable,
  ButtonGroup,
  Button
} from 'reactstrap'

import {
  removePersonList,
  findPerson
} from '../store/actions/person'

class Table extends PureComponent {
  get personTable() {
    return this.props.person.list.length === 0 ? (
      <tr>
        <td colSpan={3}>
          Data Person Tidak Ada
        </td>
      </tr>
    ) : this.props.person.list.map((prs, i) => {
      return (
        <tr key={i}>
          <td>{prs.nama}</td>
          <td>{prs.umur}</td>
          <td>
            <ButtonGroup size='sm'>
              <Button color='primary' onClick={() => this.gantiPerson({id: prs.id})}>
                Ganti
              </Button>
              <Button color='danger' onClick={() => this.removePerson({id: prs.id})}>
                Hapus
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      )
    })
  }

  removePerson(data) {
    this.props.personDis.removeList(data)
  }

  gantiPerson(data) {
    this.props.personDis.findPerson(data)
    this.props.setStage('update')
  }

  render() {
    return (
      <Card>
        <CardHeader>
          List
        </CardHeader>
        <RTable className='mb-0'>
          <thead>
          <tr>
            <th>Nama</th>
            <th>Umur</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {this.personTable}
          </tbody>
        </RTable>
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
      removeList: removePersonList,
      findPerson
    }, dispatch)
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Table)
