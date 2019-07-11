import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Ckedit from './ckeditorinputall';
import Selectone from './select-one';
import SelectCat from './SelectCat';
import PickDate from './pick-date';
import PickTime from './pick-time';
import AddForm from './addForm';



export default class inputsall extends Component{
  constructor(props) {
    super(props);
    const datobn = new Date();
        this.state = {title: '',
                  document:'',
                  Category:['Health','Biz'],
                  Parent_Task:["three", "four", "two"],
                  Role_task:["three", "four", "two"],
                  Priority:"Cannot afford to miss ",
                  Start_time: datobn,
                  End_time:datobn,
                  Start_date:datobn,
                  End_date:datobn,
                  Period:"30 mins" ,

                  data:'Description of Task'  ,
                };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDataEdit = this.getDataEdit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);


  }

 getDataEdit(evt){
   console.log('great');
  this.setState( {
    data: evt.editor.getData()
  } );

 }
  handleChange(event) {
  const  name= event.target.name;
    this.setState({[name]: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: '
     + this.state.title +this.state.data+this.state.document
      
     +' ' + this.state.Role_task+' ' + this.state.Parent_Task+
     this.state.Category+this.state.Start_time+"  "+this.state.Priority
      );
    event.preventDefault();
  }



  handleDateChange(dateobj ){
this.setState({[dateobj.name] : dateobj.date})
console.log(this.state.Start_date);


  }
  
render(){







return(<form
  onSubmit={this.handleSubmit}
   >

<TextField
        id="outlined-full-width"
        label="Label"
        name="title"
        style={{ margin: 8 }}
        placeholder="Name of the task"
        helperText="Full width!"
        fullWidth
        value={this.state.title} 
        onChange={this.handleChange}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
<TextField
        id="outlined-full-width"
        label="Attach Link "
        name="document"
        style={{ margin: 8 }}
        placeholder="Link of document"
        helperText="Full width!"
        fullWidth
        value={this.state.document} 
        onChange={this.handleChange}
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />

      
<Ckedit getdata = {this.getDataEdit} data={this.state.data} />


<SelectCat title ={"Role" } exefunc={this.handleChange}  name ="Role_task" selectedValue={this.state.Role_task} id = "Role_task" name1 ={   {  cats: [
  'one',
  'two',
  'three',
  'four',
  'five'
] } }   />




<SelectCat title ={"Parent Task" } exefunc={this.handleChange} name ="Parent_Task" id = "Parent_Task" selectedValue={this.state.Parent_Task} name1 ={   {  cats: [
  'one',
  'two',
  'three',
  'four',
  'five'
] } }   />

<SelectCat title ={"Category" } exefunc={this.handleChange} name ="Category" id = "Category" 
selectedValue={this.state.Category}
 name1 ={   {  cats: [
  'LifeStyle',
  'Health',
  'Biz',
  'Study',
  'Homework'
] } }   />
  
<Selectone onChange1 ={this.handleChange} selectedone={this.state.Priority} name= "Priority" title = {"Priority"} options = {  ["Cannot afford to miss " ,"Urgent & Important" , "Important not urgent", "only Urgent" , "Better if you do" ]   }/>



<PickTime  exefunc={this.handleDateChange} title = {'Start Time '} name={'Start_time'} SelectedTime={this.state.Start_time} />
<PickTime exefunc={this.handleDateChange} title = {'End Time '} name={'End_time'} SelectedTime={this.state.End_time} />
<PickDate  exefunc={this.handleDateChange} title = {'Start Date '} name={'Start_date'} SelectedDate={this.state.Start_date} />
<PickDate exefunc={this.handleDateChange} title = {'End Date '} name={'End_date'} SelectedDate={this.state.End_date} />

<Selectone onChange1 ={this.handleChange} selectedone={this.state.Period} name= "Period" title = {"Time Period"} options = {  ["30 mins" ,"1 hour" , "1 hour 30 mins", "2 hour" , "3 hour", "4 hours" , "5 hours" , "6 hours" ,"7 hours" , "8 hours"   ]   }/>




<Button
       type="submit"
       fullWidth
       variant="raised"
       color="primary"
       
     >
       Submit
     </Button>

   </form>
)}
    }