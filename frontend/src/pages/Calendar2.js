import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import momentPlugin from "@fullcalendar/moment";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import moment from "moment";
import { getEvents } from "./gcal";

import "./styles.css";

// must manually import the stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const CALENDAR_ID = 'bk062ctufdkkoje3gf5qjd2iuk@group.calendar.google.com'

export default class DemoApp extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
  };

  render() {
    return (
      <div styles={{fontFamily: "Arial, Helvetica Neue, Helvetica, sans-serif",fontSize: "14px"}}>
        <div styles={{margin: "0 0 3em"}}>
          <FullCalendar
            defaultView="timeGridDay"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[
              momentPlugin,
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              googleCalendarPlugin
            ]}
            ref={this.calendarComponentRef}
            // weekends={this.state.weekends}
            googleCalendarApiKey="AIzaSyDzYxK8WFbfS0_QdK1mCqpytbOzacN3fb8"
            events={{googleCalendarId: CALENDAR_ID}}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    );
  }

  toggleWeekends = () => {
    this.setState({
      // update a property
      weekends: !this.state.weekends
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  handleDateClick = arg => {
    if (
      window.confirm("Would you like to add an event to " + arg.dateStr + " ?")
    ) {
      console.log(
        "handleDateClick : ",
        arg.dateStr,
      );
    }
  };
}
