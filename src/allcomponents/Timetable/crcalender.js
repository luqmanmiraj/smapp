import React from 'react'
import { Calendar, Views ,momentLocalizer } from 'react-big-calendar'
//import { Calendar, } from 'react-big-calendar';
import moment from 'moment';



const localizer = momentLocalizer(moment);
class Selectable extends React.Component {
  constructor(...args) {
    super(...args)

    const now = new Date();
    const events = [
        {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2015, 3, 0),
            end: new Date(2015, 3, 1),
        },
        {
            id: 1,
            title: 'Long Event',
            start: new Date(2015, 3, 7),
            end: new Date(2015, 3, 10),
        },
  
        {
            id: 2,
            title: 'DTS STARTS',
            start: new Date(2016, 2, 13, 0, 0, 0),
            end: new Date(2016, 2, 20, 0, 0, 0),
        },
  
        {
            id: 3,
            title: 'DTS ENDS',
            start: new Date(2016, 10, 6, 0, 0, 0),
            end: new Date(2016, 10, 13, 0, 0, 0),
        },
  
        {
            id: 4,
            title: 'Some Event',
            start: new Date(2015, 3, 9, 0, 0, 0),
            end: new Date(2015, 3, 10, 0, 0, 0),
        },
        {
            id: 5,
            title: 'Conference',
            start: new Date(2015, 3, 11),
            end: new Date(2015, 3, 13),
            desc: 'Big conference for important people',
        },
        {
            id: 6,
            title: 'Meeting',
            start: new Date(2015, 3, 12, 10, 30, 0, 0),
            end: new Date(2015, 3, 12, 12, 30, 0, 0),
            desc: 'Pre-meeting meeting, to prepare for the meeting',
        },
        {
            id: 7,
            title: 'Lunch',
            start: new Date(2015, 3, 12, 12, 0, 0, 0),
            end: new Date(2015, 3, 12, 13, 0, 0, 0),
            desc: 'Power lunch',
        },
        {
            id: 8,
            title: 'Meeting',
            start: new Date(2015, 3, 12, 14, 0, 0, 0),
            end: new Date(2015, 3, 12, 15, 0, 0, 0),
        },
        {
            id: 9,
            title: 'Happy Hour',
            start: new Date(2015, 3, 12, 17, 0, 0, 0),
            end: new Date(2015, 3, 12, 17, 30, 0, 0),
            desc: 'Most important meal of the day',
        },
        {
            id: 10,
            title: 'Dinner',
            start: new Date(2015, 3, 12, 20, 0, 0, 0),
            end: new Date(2015, 3, 12, 21, 0, 0, 0),
        },
        {
            id: 11,
            title: 'Birthday Party',
            start: new Date(2015, 3, 13, 7, 0, 0),
            end: new Date(2015, 3, 13, 10, 30, 0),
        },
        {
            id: 12,
            title: 'Late Night Event',
            start: new Date(2015, 3, 17, 19, 30, 0),
            end: new Date(2015, 3, 18, 2, 0, 0),
        },
        {
            id: 12.5,
            title: 'Late Same Night Event',
            start: new Date(2015, 3, 17, 19, 30, 0),
            end: new Date(2015, 3, 17, 23, 30, 0),
        },
        {
            id: 13,
            title: 'Multi-day Event',
            start: new Date(2015, 3, 20, 19, 30, 0),
            end: new Date(2015, 3, 22, 2, 0, 0),
        },
        {
            id: 14,
            title: 'Today',
            start: new Date(new Date().setHours(new Date().getHours() - 3)),
            end: new Date(new Date().setHours(new Date().getHours() + 3)),
        },
        {
            id: 15,
            title: 'Point in Time Event',
            start: now,
            end: now,
        },
      ]
    this.state = { events }
  }

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

  render() {
   
    return (
      <>
      <div style={{ height: '500pt'}}>
        <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={Views.WEEK}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date(2015, 3, 12)}
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
        
        />
        </div>
      </>
    )
  }
}

//Selectable.propTypes = propTypes

export default Selectable