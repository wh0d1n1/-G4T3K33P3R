import request from "superagent"

const CALENDAR_ID = 'bk062ctufdkkoje3gf5qjd2iuk@group.calendar.google.com'
const API_KEY = 'AIzaSyDzYxK8WFbfS0_QdK1mCqpytbOzacN3fb8'
const url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request.get(url).end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event)=>events.push({start:event.start.date|| event.start.dateTime, end:event.end.date || event.end.dateTime,title: event.summary}))
        callback(events)}
    })
}