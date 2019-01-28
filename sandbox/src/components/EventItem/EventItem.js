import React, { Component } from 'react';
import './EventItem.css';

class EventItem extends Component {
  constructor (props) {
    super (props)
    this.state = {
      isOpen: false,
      isFavorite: false
    }
    this.handleClick = handleClick.bind(this)
    this.addToFavorite = addToFavorite.bind(this)
  }
  render () {
    const {item} = this.props;
    const content = this.state.isOpen && <div className="content">
                                          <div className="description"> {item.description} </div>
                                          <div className="price"> {item.price} </div>
                                          <div className="type"> {item.type} </div>
                                        </div>
    return (
      <div className="event-item">
        <h3 className="title">{item.title}<button className="btn btn-sm" onClick={this.addToFavorite}>&#9733;</button></h3>
        <button onClick={this.handleClick} className="btn btn-info btn-sm">{this.state.isOpen ? "скрыть" : 'показать'}</button>
        {content}
      </div>
  );
  }
}

function handleClick () {
  this.setState({
    isOpen: !this.state.isOpen
  })
}
function addToFavorite () {
  this.setState({
    isfavorite: !this.state.isOpen
  })
}

export default EventItem
