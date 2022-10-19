import React, { Component } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { GOOGLE_API_KEY, CALENDAR_ID } from "./config.js";
import { gapi } from 'gapi-script'
import moment from "moment";
import LoadingSpinner from "../content/media/reactViews/LoadingSpinner";
import 'moment/locale/it';

export default class Example extends Component {

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: moment().toDate(),
      selectedTime: undefined,
      timeslots1: ['8:00 am', '9:00 am', '10:00 am', '11:00 am'],
      timeslots2: ['12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm'],
      timeslots3: ['5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm'],
      slot1: false,
      slot2: false,
      slot3: false,
      slot4: false,
      slot5: false,
      slot6: false,
      slot7: false,
      slot8: false,
      slot9: false,
      slot10: false,
      slot11: false,
      slot12: false,
      slot13: false,
      slot14: false,
      time: moment().format("dd, Do MMMM, h:mm A"),
      events: [],
      isBusy: false,
      isEmpty: false,
      isLoading: true
    };
  }

  componentDidMount = () => {
    this.getEvents();
    setInterval(() => {
      this.tick();
    }, 1000);
    setInterval(() => {
      this.getEvents();
    }, 60000);
  };

  getEvents() {
    let that = this;
    function start() {
      gapi.client
        .init({
          apiKey: GOOGLE_API_KEY
        })
        .then(function () {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?maxResults=11&orderBy=updated&timeMin=${moment().subtract(1, 'y').endOf("day").toISOString()}&timeMax=${moment().add(1, 'y')
              .endOf("day")
              .toISOString()}`
          });
        })
        .then(
          response => {
            let events = response.result.items;
            let sortedEvents = events.sort(function (a, b) {
              return (
                moment(b.start.dateTime).format("YYYYMMDD") -
                moment(a.start.dateTime).format("YYYYMMDD")
              );
            });
            if (events.length > 0) {
              that.setState(
                {
                  events: sortedEvents,
                  isLoading: false,
                  isEmpty: false
                },
                () => {
                  that.setStatus();
                }
              );
            } else {
              that.setState({
                isBusy: false,
                isEmpty: true,
                isLoading: false
              });
            }
          },
          function (reason) {
            console.log(reason);
          }
        );
    }
    gapi.load("client", start);
  }

  tick = () => {
    let time = moment().format("dddd, Do MMMM, h:mm A");
    this.setState({
      time: time
    });
  };

  setStatus = () => {
    let now = moment();
    let events = this.state.events;
    for (var e = 0; e < events.length; e++) {
      var eventItem = events[e];
      if (
        moment(now).isBetween(
          moment(eventItem.start.dateTime),
          moment(eventItem.end.dateTime)
        )
      ) {
        this.setState({
          isBusy: true
        });
        return false;
      } else {
        this.setState({
          isBusy: false
        });
      }
    }
  };

  handleDayClick(day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  }

  render() {

    const { events, timeslots1, timeslots2, timeslots3 } = this.state;

    const { time, events, timeslots1, timeslots2, timeslots3 } = this.state;



    let eventsList1 = events.map(function (event) { const slot = timeslots1.map(function (slots) { return slots === moment(event.start.dateTime).format("h:mm a") ? ('Busy') : (slots.replace(':00', '')) }); return (slot); });
    let eventsList2 = events.map(function (event) { const slot = timeslots2.map(function (slots) { return slots === moment(event.start.dateTime).format("h:mm a") ? ('Busy') : (slots.replace(':00', '')) }); return (slot); });
    let eventsList3 = events.map(function (event) { const slot = timeslots3.map(function (slots) { return slots === moment(event.start.dateTime).format("h:mm a") ? ('Busy') : (slots.replace(':00', '')) }); return (slot); });
    if (eventsList1.length<1){eventsList1 =timeslots1.map(function (slots) {return (slots.replace(':00', ''));})}
    if (eventsList2.length<1){eventsList2 =timeslots2.map(function (slots) {return (slots.replace(':00', ''));})}
    if (eventsList3.length<1){eventsList3 =timeslots3.map(function (slots) {return (slots.replace(':00', ''));})}

    let loadingState = (<div className="loading"> <LoadingSpinner /> </div>);

    return (
      <div className="row mt-0 pt-0 h-75" style={{fontSize:"16px"}}>
        <div className="col-md-5 p-0 m-0 ">
          <DayPicker
            selectedDays={this.state.selectedDay}
            onDayClick={this.handleDayClick}
            className="p-0 m-0"
            style={{ height: "50%", fontSize:"12px" }}
          />
        </div>
        <div className="col-md text-right ml-auto">
          <p>
            {this.state.selectedDay
              ? (
                <div>
                  <p className="text-center mt-auto mb-0 pb-0">
                  {
                    this.state.selectedDay.toLocaleDateString().split('/')[0] 
                    + '/' + 
                    this.state.selectedDay.toLocaleDateString().split('/')[1]
                  }
                  {' - '}
                  {
                    this.state.selectedTime === undefined ? ('Please Select Time Below') : (this.state.selectedTime)
                  }
                  </p>
                  <div>{this.state.isLoading && loadingState}</div>
                  <div className="row text-left ml-auto">
                    <div className="text-left col p-0 pl-3 border-right">
                      <p className="text-left m-0 p-0 font-weight-bold" style={{ color: "#000000" }}>Morning</p>
                      {eventsList1.toString().split(',')[0] === 'Busy' ? (<span className="text-center text-muted">Busy</span>) : (
                        <div className="form-check-inline pr-0">
                          <label className="form-check-label " for="radio1" style={{
                            color: (!this.state.slot1 === true ? ("#000000") : ("#0000ff"))
                            , fontWeight: (!this.state.slot1 === true ? ("300") : ("600"))
                          }}>
                            <input
                              type="radio"
                              className="form-check-input text-primary"
                              style={{ backgroundColor: "#0000ff" }}
                              id="radio1"
                              checked={this.state.slot1}
                              name="slot1"
                              value={this.state.slot1}
                              onChange={() => this.setState({
                                slot1: (!this.state.slot1 === true && true)
                                , slot2: (!this.state.slot2 === true && false)
                                , slot3: (!this.state.slot3 === true && false)
                                , slot4: (!this.state.slot4 === true && false)
                                , slot5: (!this.state.slot5 === true && false)
                                , slot6: (!this.state.slot6 === true && false)
                                , slot7: (!this.state.slot7 === true && false)
                                , slot8: (!this.state.slot8 === true && false)
                                , slot9: (!this.state.slot9 === true && false)
                                , slot10: (!this.state.slot10 === true && false)
                                , slot11: (!this.state.slot11 === true && false)
                                , slot12: (!this.state.slot12 === true && false)
                                , slot13: (!this.state.slot13 === true && false)
                                , slot14: (!this.state.slot14 === true && false)
                                , selectedTime: (!this.state.slot1 === true && eventsList1.toString().split(',')[0])
                              })} />                                         {eventsList1.toString().split(',')[0]}
                          </label>
                        </div>
                      )
                      }
                      {eventsList1.toString().split(',')[1] === 'Busy' ? (<span className="text-center text-muted">Busy</span>) : (
                        <div className="form-check-inline pr-0">
                          <label className="form-check-label" for="radio1" style={{
                            color: (!this.state.slot2 === true ? ("#000000") : ("#0000ff"))
                            , fontWeight: (!this.state.slot2 === true ? ("300") : ("600"))
                          }}>
                            <input
                              type="radio"
                              className="form-check-input"
                              id="radio1"
                              checked={this.state.slot2}
                              name="slot2"
                              value={this.state.slot2}
                              onChange={() => this.setState({
                                slot1: (!this.state.slot1 === true && false)
                                , slot2: (!this.state.slot2 === true && true)
                                , slot3: (!this.state.slot3 === true && false)
                                , slot4: (!this.state.slot4 === true && false)
                                , slot5: (!this.state.slot5 === true && false)
                                , slot6: (!this.state.slot6 === true && false)
                                , slot7: (!this.state.slot7 === true && false)
                                , slot8: (!this.state.slot8 === true && false)
                                , slot9: (!this.state.slot9 === true && false)
                                , slot10: (!this.state.slot10 === true && false)
                                , slot11: (!this.state.slot11 === true && false)
                                , slot12: (!this.state.slot12 === true && false)
                                , slot13: (!this.state.slot13 === true && false)
                                , slot14: (!this.state.slot14 === true && false)
                                , selectedTime: (!this.state.slot2 === true && eventsList1.toString().split(',')[1])
                              })} />                                         {eventsList1.toString().split(',')[1]}
                          </label>
                        </div>
                      )
                      }
                      {eventsList1.toString().split(',')[2] === 'Busy' ? 
                      (<div className="text-center text-muted ">Busy</div>) : (
                        <div className="form-check-inline pr-0">
                          <label className="form-check-label" for="radio1" style={{
                            color: (!this.state.slot3 === true ? ("#000000") : ("#0000ff"))
                            , fontWeight: (!this.state.slot3 === true ? ("300") : ("600"))
                          }}>
                            <input
                              type="radio"
                              className="form-check-input"
                              id="radio1"
                              checked={this.state.slot3}
                              name="slot3"
                              value={this.state.slot3}
                              onChange={() => this.setState({
                                slot1: (!this.state.slot1 === true && false)
                                , slot2: (!this.state.slot2 === true && false)
                                , slot3: (!this.state.slot3 === true && true)
                                , slot4: (!this.state.slot4 === true && false)
                                , slot5: (!this.state.slot5 === true && false)
                                , slot6: (!this.state.slot6 === true && false)
                                , slot7: (!this.state.slot7 === true && false)
                                , slot8: (!this.state.slot8 === true && false)
                                , slot9: (!this.state.slot9 === true && false)
                                , slot10: (!this.state.slot10 === true && false)
                                , slot11: (!this.state.slot11 === true && false)
                                , slot12: (!this.state.slot12 === true && false)
                                , slot13: (!this.state.slot13 === true && false)
                                , slot14: (!this.state.slot14 === true && false)
                                , selectedTime: (!this.state.slot3 === true && eventsList1.toString().split(',')[2])
                              })} />                                         {eventsList1.toString().split(',')[2]}
                          </label>
                        </div>
                      )
                      }

                      {eventsList1.toString().split(',')[3] &&
                        <div className="form-check-inline pr-0">
                          <label className="form-check-label" for="radio1" style={{
                            color: (!this.state.slot4 === true ? ("#000000") : ("#0000ff"))
                            , fontWeight: (!this.state.slot4 === true ? ("300") : ("600"))
                          }}>
                            <input
                              type="radio"
                              className="form-check-input"
                              id="radio1"
                              checked={this.state.slot4}
                              name="slot4"
                              value={this.state.slot4}
                              onChange={() => this.setState({
                                slot1: (!this.state.slot1 === true && false)
                                , slot2: (!this.state.slot2 === true && false)
                                , slot3: (!this.state.slot3 === true && false)
                                , slot4: (!this.state.slot4 === true && true)
                                , slot5: (!this.state.slot5 === true && false)
                                , slot6: (!this.state.slot6 === true && false)
                                , slot7: (!this.state.slot7 === true && false)
                                , slot8: (!this.state.slot8 === true && false)
                                , slot9: (!this.state.slot9 === true && false)
                                , slot10: (!this.state.slot10 === true && false)
                                , slot11: (!this.state.slot11 === true && false)
                                , slot12: (!this.state.slot12 === true && false)
                                , slot13: (!this.state.slot13 === true && false)
                                , slot14: (!this.state.slot14 === true && false)
                                , selectedTime: (!this.state.slot4 === true && eventsList1.toString().split(',')[3])
                              })} />                                         {eventsList1.toString().split(',')[3]}
                          </label>
                        </div>
                      }


                    </div>
                    <div className="text-left col p-0 pl-3 border-right">
                      <p className="text-left m-0 p-0 font-weight-bold">Afternoon</p>
                      <div className="form-check-inline pr-0">
                        <label className="form-check-label" for="radio1" style={{
                          color: (!this.state.slot5 === true ? ("#000000") : ("#0000ff"))
                          , fontWeight: (!this.state.slot5 === true ? ("300") : ("600"))
                        }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            checked={this.state.slot5}
                            name="slot5"
                            value={this.state.slot5}
                            onChange={() => this.setState({
                              slot1: (!this.state.slot1 === true && false)
                              , slot2: (!this.state.slot2 === true && false)
                              , slot3: (!this.state.slot3 === true && false)
                              , slot4: (!this.state.slot4 === true && false)
                              , slot5: (!this.state.slot5 === true && true)
                              , slot6: (!this.state.slot6 === true && false)
                              , slot7: (!this.state.slot7 === true && false)
                              , slot8: (!this.state.slot8 === true && false)
                              , slot9: (!this.state.slot9 === true && false)
                              , slot10: (!this.state.slot10 === true && false)
                              , slot11: (!this.state.slot11 === true && false)
                              , slot12: (!this.state.slot12 === true && false)
                              , slot13: (!this.state.slot13 === true && false)
                              , slot14: (!this.state.slot14 === true && false)
                              , selectedTime: (!this.state.slot1 === true && eventsList2.toString().split(',')[0])
                            })} />                                         {eventsList2.toString().split(',')[0]}
                        </label>
                      </div>
                      <div className="form-check-inline pr-0">
                        <label className="form-check-label" for="radio1" style={{
                          color: (!this.state.slot6 === true ? ("#000000") : ("#0000ff"))
                          , fontWeight: (!this.state.slot6 === true ? ("300") : ("600"))
                        }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            checked={this.state.slot6}
                            name="slot6"
                            value={this.state.slot6}
                            onChange={() => this.setState({
                              slot1: (!this.state.slot1 === true && false)
                              , slot2: (!this.state.slot2 === true && false)
                              , slot3: (!this.state.slot3 === true && false)
                              , slot4: (!this.state.slot4 === true && false)
                              , slot5: (!this.state.slot5 === true && false)
                              , slot6: (!this.state.slot6 === true && true)
                              , slot7: (!this.state.slot7 === true && false)
                              , slot8: (!this.state.slot8 === true && false)
                              , slot9: (!this.state.slot9 === true && false)
                              , slot10: (!this.state.slot10 === true && false)
                              , slot11: (!this.state.slot11 === true && false)
                              , slot12: (!this.state.slot12 === true && false)
                              , slot13: (!this.state.slot13 === true && false)
                              , slot14: (!this.state.slot14 === true && false)
                              , selectedTime: (!this.state.slot6 === true && eventsList2.toString().split(',')[1])
                            })} />                                         {eventsList2.toString().split(',')[1]}
                        </label>
                      </div>
                      <div className="form-check-inline pr-0">
                        <label className="form-check-label" for="radio1" style={{
                          color: (!this.state.slot7 === true ? ("#000000") : ("#0000ff"))
                          , fontWeight: (!this.state.slot7 === true ? ("300") : ("600"))
                        }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            checked={this.state.slot7}
                            name="slot7"
                            value={this.state.slot7}
                            onChange={() => this.setState({
                              slot1: (!this.state.slot1 === true && false)
                              , slot2: (!this.state.slot2 === true && false)
                              , slot3: (!this.state.slot3 === true && false)
                              , slot4: (!this.state.slot4 === true && false)
                              , slot5: (!this.state.slot5 === true && false)
                              , slot6: (!this.state.slot6 === true && false)
                              , slot7: (!this.state.slot7 === true && true)
                              , slot8: (!this.state.slot8 === true && false)
                              , slot9: (!this.state.slot9 === true && false)
                              , slot10: (!this.state.slot10 === true && false)
                              , slot11: (!this.state.slot11 === true && false)
                              , slot12: (!this.state.slot12 === true && false)
                              , slot13: (!this.state.slot13 === true && false)
                              , slot14: (!this.state.slot14 === true && false)
                              , selectedTime: (!this.state.slot7 === true && eventsList2.toString().split(',')[2])
                            })} />                                         {eventsList2.toString().split(',')[2]}
                        </label>
                      </div>
                      <div className="form-check-inline pr-0">
                        <label className="form-check-label" for="radio1" style={{
                          color: (!this.state.slot8 === true ? ("#000000") : ("#0000ff"))
                          , fontWeight: (!this.state.slot8 === true ? ("300") : ("600"))
                        }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            checked={this.state.slot8}
                            name="slot8"
                            value={this.state.slot8}
                            onChange={() => this.setState({
                              slot1: (!this.state.slot1 === true && false)
                              , slot2: (!this.state.slot2 === true && false)
                              , slot3: (!this.state.slot3 === true && false)
                              , slot4: (!this.state.slot4 === true && false)
                              , slot5: (!this.state.slot5 === true && false)
                              , slot6: (!this.state.slot6 === true && false)
                              , slot7: (!this.state.slot7 === true && false)
                              , slot8: (!this.state.slot8 === true && true)
                              , slot9: (!this.state.slot9 === true && false)
                              , slot10: (!this.state.slot10 === true && false)
                              , slot11: (!this.state.slot11 === true && false)
                              , slot12: (!this.state.slot12 === true && false)
                              , slot13: (!this.state.slot13 === true && false)
                              , slot14: (!this.state.slot14 === true && false)
                              , selectedTime: (!this.state.slot8 === true && eventsList2.toString().split(',')[3])
                            })} />                                         {eventsList2.toString().split(',')[3]}
                        </label>
                      </div>
                      <div className="form-check-inline pr-0">
                        <label className="form-check-label" for="radio1" style={{
                          color: (!this.state.slot9 === true ? ("#000000") : ("#0000ff"))
                          , fontWeight: (!this.state.slot9 === true ? ("300") : ("600"))
                        }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            checked={this.state.slot9}
                            name="slot9"
                            value={this.state.slot9}
                            onChange={() => this.setState({
                              slot1: (!this.state.slot1 === true && false)
                              , slot2: (!this.state.slot2 === true && false)
                              , slot3: (!this.state.slot3 === true && false)
                              , slot4: (!this.state.slot4 === true && false)
                              , slot5: (!this.state.slot5 === true && false)
                              , slot6: (!this.state.slot6 === true && false)
                              , slot7: (!this.state.slot7 === true && false)
                              , slot8: (!this.state.slot8 === true && false)
                              , slot9: (!this.state.slot9 === true && true)
                              , slot10: (!this.state.slot10 === true && false)
                              , slot11: (!this.state.slot11 === true && false)
                              , slot12: (!this.state.slot12 === true && false)
                              , slot13: (!this.state.slot13 === true && false)
                              , slot14: (!this.state.slot14 === true && false)
                              , selectedTime: (!this.state.slot9 === true && eventsList2.toString().split(',')[4])
                            })} />                                         {eventsList2.toString().split(',')[4]}
                        </label>
                      </div>


                    </div>
                    <div className="text-left col p-0 pl-3 border-right">
                      <p className="text-left m-0 p-0 font-weight-bold">Evening</p>
                      <div className="form-check-inline pr-0">
                        <label className="form-check-label" for="radio1" style={{
                          color: (!this.state.slot10 === true ? ("#000000") : ("#0000ff"))
                          , fontWeight: (!this.state.slot10 === true ? ("300") : ("600"))
                        }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            checked={this.state.slot10}
                            name="slot10"
                            value={this.state.slot10}
                            onChange={() => this.setState({
                              slot1: (!this.state.slot1 === true && false)
                              , slot2: (!this.state.slot2 === true && false)
                              , slot3: (!this.state.slot3 === true && false)
                              , slot4: (!this.state.slot4 === true && false)
                              , slot5: (!this.state.slot5 === true && false)
                              , slot6: (!this.state.slot6 === true && false)
                              , slot7: (!this.state.slot7 === true && false)
                              , slot8: (!this.state.slot8 === true && false)
                              , slot9: (!this.state.slot9 === true && false)
                              , slot10: (!this.state.slot10 === true && true)
                              , slot11: (!this.state.slot11 === true && false)
                              , slot12: (!this.state.slot12 === true && false)
                              , slot13: (!this.state.slot13 === true && false)
                              , slot14: (!this.state.slot14 === true && false)
                              , selectedTime: (!this.state.slot10 === true && eventsList3.toString().split(',')[0])
                            })} />                                         {eventsList3.toString().split(',')[0]}
                        </label>
                      </div>
                      <div className="form-check-inline pr-0">
                        <label className="form-check-label" for="radio1" style={{
                          color: (!this.state.slot11 === true ? ("#000000") : ("#0000ff"))
                          , fontWeight: (!this.state.slot11 === true ? ("300") : ("600"))
                        }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            checked={this.state.slot11}
                            name="slot11"
                            value={this.state.slot11}
                            onChange={() => this.setState({
                              slot1: (!this.state.slot1 === true && false)
                              , slot2: (!this.state.slot2 === true && false)
                              , slot3: (!this.state.slot3 === true && false)
                              , slot4: (!this.state.slot4 === true && false)
                              , slot5: (!this.state.slot5 === true && false)
                              , slot6: (!this.state.slot6 === true && false)
                              , slot7: (!this.state.slot7 === true && false)
                              , slot8: (!this.state.slot8 === true && false)
                              , slot9: (!this.state.slot9 === true && false)
                              , slot10: (!this.state.slot10 === true && false)
                              , slot11: (!this.state.slot11 === true && true)
                              , slot12: (!this.state.slot12 === true && false)
                              , slot13: (!this.state.slot13 === true && false)
                              , slot14: (!this.state.slot14 === true && false)
                              , selectedTime: (!this.state.slot11 === true && eventsList3.toString().split(',')[1])
                            })} />                                         {eventsList3.toString().split(',')[1]}
                        </label>
                      </div>
                      <div className="form-check-inline pr-0">
                        <label className="form-check-label" for="radio1" style={{
                          color: (!this.state.slot12 === true ? ("#000000") : ("#0000ff"))
                          , fontWeight: (!this.state.slot12 === true ? ("300") : ("600"))
                        }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            checked={this.state.slot12}
                            name="slot12"
                            value={this.state.slot12}
                            onChange={() => this.setState({
                              slot1: (!this.state.slot1 === true && false)
                              , slot2: (!this.state.slot2 === true && false)
                              , slot3: (!this.state.slot3 === true && false)
                              , slot4: (!this.state.slot4 === true && false)
                              , slot5: (!this.state.slot5 === true && false)
                              , slot6: (!this.state.slot6 === true && false)
                              , slot7: (!this.state.slot7 === true && false)
                              , slot8: (!this.state.slot8 === true && false)
                              , slot9: (!this.state.slot9 === true && false)
                              , slot10: (!this.state.slot10 === true && false)
                              , slot11: (!this.state.slot11 === true && false)
                              , slot12: (!this.state.slot12 === true && true)
                              , slot13: (!this.state.slot13 === true && false)
                              , slot14: (!this.state.slot14 === true && false)
                              , selectedTime: (!this.state.slot12 === true && eventsList3.toString().split(',')[2])
                            })} />                                         {eventsList3.toString().split(',')[2]}
                        </label>
                      </div>
                      <div className="form-check-inline pr-0">
                        <label className="form-check-label" for="radio1" style={{
                          color: (!this.state.slot13 === true ? ("#000000") : ("#0000ff"))
                          , fontWeight: (!this.state.slot13 === true ? ("300") : ("600"))
                        }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            checked={this.state.slot13}
                            name="slot13"
                            value={this.state.slot13}
                            onChange={() => this.setState({
                              slot1: (!this.state.slot1 === true && false)
                              , slot2: (!this.state.slot2 === true && false)
                              , slot3: (!this.state.slot3 === true && false)
                              , slot4: (!this.state.slot4 === true && false)
                              , slot5: (!this.state.slot5 === true && false)
                              , slot6: (!this.state.slot6 === true && false)
                              , slot7: (!this.state.slot7 === true && false)
                              , slot8: (!this.state.slot8 === true && false)
                              , slot9: (!this.state.slot9 === true && false)
                              , slot10: (!this.state.slot10 === true && false)
                              , slot11: (!this.state.slot11 === true && false)
                              , slot12: (!this.state.slot12 === true && false)
                              , slot13: (!this.state.slot13 === true && true)
                              , slot14: (!this.state.slot14 === true && false)
                              , selectedTime: (!this.state.slot13 === true && eventsList3.toString().split(',')[3])
                            })} />                                         {eventsList3.toString().split(',')[3]}
                        </label>
                      </div>
                      <div className="form-check-inline pr-0">
                        <label className="form-check-label" for="radio1" style={{
                          color: (!this.state.slot14 === true ? ("#000000") : ("#0000ff"))
                          , fontWeight: (!this.state.slot14 === true ? ("300") : ("600"))
                        }}>
                          <input
                            type="radio"
                            className="form-check-input"
                            id="radio1"
                            checked={this.state.slot14}
                            name="slot14"
                            value={this.state.slot14}
                            onChange={() => this.setState({
                              slot1: (!this.state.slot1 === true && false)
                              , slot2: (!this.state.slot2 === true && false)
                              , slot3: (!this.state.slot3 === true && false)
                              , slot4: (!this.state.slot4 === true && false)
                              , slot5: (!this.state.slot5 === true && false)
                              , slot6: (!this.state.slot6 === true && false)
                              , slot7: (!this.state.slot7 === true && false)
                              , slot8: (!this.state.slot8 === true && false)
                              , slot9: (!this.state.slot9 === true && false)
                              , slot10: (!this.state.slot10 === true && false)
                              , slot11: (!this.state.slot11 === true && false)
                              , slot12: (!this.state.slot12 === true && false)
                              , slot13: (!this.state.slot13 === true && false)
                              , slot14: (!this.state.slot14 === true && true)
                              , selectedTime: (!this.state.slot14 === true && eventsList3.toString().split(',')[4])
                            })} />                                         {eventsList3.toString().split(',')[4]}
                        </label>
                      </div>


                    </div>
                  </div>
                </div>
              )
              : (

                <div className="container">
                  <p className="text-center mt-auto">Please select a day</p>
                </div>

              )}
          </p>
        </div>
      </div>
    );
  }
}
