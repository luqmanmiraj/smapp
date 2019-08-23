import React, { Component } from 'react';
import ModelPopUp from '../Tasks/dialogfromtask'
//import { render } from 'react-dom';
import { Calendar, Views , momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default class Timetable extends Component {
  constructor() {
    super();
    const now = new Date();

    this.ondoubleclickfunction = this.ondoubleclickfunction.bind(this);
    this.handleSelect = this.handleSelect.bind(this);

    const events = [
      {
          id: 0,
          title: 'All Day Event very long title',
          allDay: true,
          start: new Date(2019, 7, 25),
          end: new Date(2019, 7, 26),
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
          start: new Date(2019, 6 , 25, 1, 0, 0, 0),
          end: new Date(2019, 6, 25, 2, 30, 0, 0),
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
    this.state = {
      name: 'React',
      events : events,
      showpopform:false
    };
  }

  ondoubleclickfunction(event){

  
console.log("calendar double clicked event");
this.setState({showpopform:true});
  }


  handleSelect = () => {
    console.log("yes it is changed");
  this.setState({showpopform:true});

  }



  render() {

    if(this.state.showpopform){
    return (



      <div>
        <p>
          A test for the React Big Calendar.
        </p>
        <div style={{ height: '500pt'}}>
        <ModelPopUp settrue={true} />
          <Calendar
          selectable
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={moment().toDate()}
            localizer={localizer}
            onSelectEvent={(event) => {
              
              alert(event.title)
              this.ondoubleclickfunction(event);
              this.setState({showpopform:true});
             }}
            onSelectSlot={this.handleSelect}
            onDoubleClickEvent = {this.ondoubleclickfunction}
            defaultView={Views.WEEK}
          />
        </div>
      </div>
    );
            } else {

              return (



                <div>
                  <p>
                    A test for the React Big Calendar.
                  </p>
                  <div style={{ height: '500pt'}}>
                 
                    <Calendar
                    selectable
                      events={this.state.events}
                      startAccessor="start"
                      endAccessor="end"
                      defaultDate={moment().toDate()}
                      localizer={localizer}
                      onSelectEvent={(event) => {
                        
                        alert(event.title)
                        this.ondoubleclickfunction(event);
                       }}
                      onSelectSlot={this.handleSelect}
                      onDoubleClickEvent = {this.ondoubleclickfunction}
                      defaultView={Views.WEEK}
                    />
                  </div>
                </div>
              );



            }
  }
}


