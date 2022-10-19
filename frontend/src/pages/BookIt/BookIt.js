import React from 'react';
import Iframe from 'react-iframe'

const BookIt = () => {
    return (
        <Iframe url="https://outlook.office365.com/owa/calendar/PremiumHealthSolutions@M4G1K.com/bookings/"
            position="relative"
            width="100%" scrolling='no' height="1340px"
            id="myId"
            className="myClassname border border-white bg-white p-0 m-0"
            style={{ backgroundColor: "#ffffff" }}
        />
    )
}

export default BookIt;