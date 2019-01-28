import React, { Component } from 'react';
import EventsList from './components/EventList/EventsList';
import Favorites from './components/Favorites/Favorites'
import events from './data'

function App () {
       return (
           <div className="App">
           <Favorites/>
           <EventsList data = {events}/>
           </div>
       );
}

export default App