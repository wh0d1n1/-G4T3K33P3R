import { useState, createRef,useRef, useEffect}  from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import timelinePlugin from "@fullcalendar/timeline";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import momentPlugin from "@fullcalendar/moment";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import "./styles.css";
import { Card, Button, Container, DialogTitle } from '@mui/material';
import { useDispatch, useSelector } from '../redux/store';
import { getEvents, openModal, closeModal, updateEvent, selectEvent, selectRange } from '../redux/slices/calendar';
import { PATH_DASHBOARD } from '../routes/paths';
import useSettings from '../hooks/useSettings';
import useResponsive from '../hooks/useResponsive';
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { DialogAnimate } from '../components/animate';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { CalendarForm, CalendarStyle, CalendarToolbar } from '../sections/@dashboard/calendar';

const CALENDAR_ID = "travis@travisthehealthadvisor.com";


export default function Calendar() {
  const calendarComponentRef = createRef();
  const state = {};
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const isDesktop = useResponsive('up', 'sm');
  const calendarRef = useRef(null);
  const [date, setDate] = useState(new Date());


  const handleClickToday = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };


  const handleClickDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleClickDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleSelectRange = (arg) => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.unselect();
    }
    dispatch(selectRange(arg.start, arg.end));
  };

  const handleAddEvent = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
    return (
      <Page title="Calendar">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <HeaderBreadcrumbs
          heading="Calendar"
          links={[{ name: 'Dashboard', href: PATH_DASHBOARD.root }, { name: 'Calendar' }]}
          moreLink="https://fullcalendar.io/docs/react"
          action={
            <Button
              variant="contained"
              startIcon={<Iconify icon={'eva:plus-fill'} width={20} height={20} />}
              onClick={handleAddEvent}
            >New Event
            </Button>
          }
        />

        <Card>
          <CalendarStyle>
            <CalendarToolbar
              date={date}
              onNextDate={handleClickDateNext}
              onPrevDate={handleClickDatePrev}
              onToday={handleClickToday}
            />
          <FullCalendar
            defaultView="timeGridDay"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            plugins={[
              listPlugin, 
              dayGridPlugin, 
              timelinePlugin, 
              interactionPlugin,
              momentPlugin,
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              googleCalendarPlugin
            ]}
            ref={calendarComponentRef}
            googleCalendarApiKey="AIzaSyABp9nQIn3P91jEODHMOAUQnoC5x0LFnv0"
            events={{ googleCalendarId: CALENDAR_ID }}
            editable
            droppable
            selectable
            rerenderDelay={10}
            initialDate={date}
            dayMaxEventRows={3}
            eventDisplay="block"
            headerToolbar={false}
            allDayMaintainDuration
            eventResizableFromStart

            height={isDesktop ? 720 : 'auto'}
           

          />
        </CalendarStyle>
        </Card>


      </Container>
    </Page>
    );
  }



