import React from 'react';
import Formf from './TC/form';
import AllTasks from './Tasks-list';
import Timetable from '../Timetable/timetable';
import Deadlines from '../Deadlines/deadline';
import TimeLog from '../TimeLogs/timelogs';
import Performance from '../Performances/performance';


class task extends React.Component {
    state = {
        auth: true
    }



    render() {
      return (<div> 

      <div> <Formf/> 
      
      </div>
      <div>   <AllTasks/>    </div>
      <div><Timetable/>      </div>
      <div>     <Deadlines/>             </div>
      <div>     <Performance/>              </div>
      <div>    <TimeLog/>             </div>
      </div>);
    }


  }

  export default task;