import React, { Component } from "react";
import "./EventsList.css";
import EventItem from "../EventItem/EventItem";

function EventsList({data}) {
  const eventItem = data.map(item => 
    <li>
      <EventItem item={item} />
    </li>
  );
  return (
    <div className="events">
      <h2>События</h2>
      <ul>
        {eventItem}
      </ul>
    </div>
  )
}

export default EventsList;
