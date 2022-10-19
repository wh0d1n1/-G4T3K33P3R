import React, {Component} from 'react';

import {AddEventGoogleButton} from 'react-event-generator-for-email-calendar';

export default class AddEvent extends Component{
    
    state = {
        title: "Simple Title",
        description:"Simple Description",
        location:"New York",
        startDate:new Date(),
        endDate:new Date(),
        allDay:true
    }
 
    render(){
        const {title,description,location,startDate,endDate,allDay} = this.state;
        return (      
            <AddEventGoogleButton 
            title={title} 
            description={description} 
            location={location}
            allDay={allDay}
            startDate={startDate}
            endDate={endDate}>
            </AddEventGoogleButton>
        );
    }
}