/* eslint-disable react/no-string-refs */
import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Patient List Application',
      act: 0,
      index: '',
      datas: []
    }
  }

  componentDidMount () {
    this.refs.name.focus()
  }

  fSubmit = (e) => {
    e.preventDefault()

    let datas = this.state.datas
    let name = this.refs.name.value
    let nhiNumber = this.refs.nhiNumber.value
    let comments = this.refs.comments.value

    if (this.state.act === 0) { // new
      let data = {
        name, nhiNumber, comments
      }
      datas.push(data)
    } else { // update
      let index = this.state.index
      datas[index].name = name
      datas[index].nhiNumber = nhiNumber
      datas[index].comments = comments
    }

    this.setState({
      datas: datas,
      act: 0
    })
    localStorage.setItem('datas', JSON.stringify(datas))
    // console.log('datas')
    this.refs.myForm.reset()
    this.refs.name.focus()
  }

  fRemove = (i) => {
    let datas = this.state.datas
    datas.splice(i, 1)
    this.setState({
      datas: datas
    })
    datas = localStorage.removeItem(i)
    this.refs.myForm.reset()
    this.refs.name.focus()
  }

  fEdit = (i) => {
    let data = this.state.datas[i]
    this.refs.name.value = data.name
    this.refs.nhiNumber.value = data.nhiNumber
    this.refs.comments.value = data.comments

    this.setState({
      act: 1,
      index: i
    })
    // data = JSON.parse(localStorage.getItem('data'))
    // console.log(data)
    this.refs.name.focus()
  }

  render () {
    let datas = this.state.datas
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="patient name" className="formField" />
          <input type="text" ref="nhiNumber" placeholder="patient NHI" className="formField" />
          <input type="text" ref="comments" placeholder="patient comments" className="formField" />

          <button onClick={(e) => this.fSubmit(e)} className="myButton">Submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i + 1}. {data.name}, {data.nhiNumber}, {data.comments}
              <button onClick={() => this.fRemove(i)} className="myListButton">remove </button>
              <button onClick={() => this.fEdit(i)} className="myListButton">edit </button>
            </li>
          )}
        </pre>
      </div>
    )
  }
}

export default App
