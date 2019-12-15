/* eslint-disable react/no-string-refs */
import React, { Component } from 'react'
// import '../main.css'

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
    // console.log('try')

    let datas = this.state.datas
    let name = this.refs.name.value
    let address = this.refs.address.value
    let comments = this.refs.comments.value

    if (this.state.act === 0) { // new
      let data = {
        name, address, comments
      }
      datas.push(data)
    } else { // update
      let index = this.state.index
      datas[index].name = name
      datas[index].address = address
      datas[index].comments = comments
    }

    this.setState({
      datas: datas,
      act: 0
    })

    this.refs.myForm.reset()
    this.refs.name.focus()
  }

  fRemove = (i) => {
    let datas = this.state.datas
    datas.splice(i, 1)
    this.setState({
      datas: datas
    })

    this.refs.myForm.reset()
    this.refs.name.focus()
  }

  fEdit = (i) => {
    let data = this.state.datas[i]
    this.refs.name.value = data.name
    this.refs.address.value = data.address
    this.refs.comments.value = data.comments

    this.setState({
      act: 1,
      index: i
    })

    this.refs.name.focus()
  }

  render () {
    let datas = this.state.datas
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <input type="text" ref="comments" placeholder="your comments" className="formField" />

          <button onClick={(e) => this.fSubmit(e)} className="myButton">submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i + 1}. {data.name}, {data.address}, {data.comments}
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
