import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Ckedit from './ckeditorinputall';
//import Selectone from './select-one';
import SelectCat from './SelectCat';



export default class inputsall extends Component{
  constructor(props) {
    super(props);
    this.state = {title: '',
                  document:'',
                  Category:['Health','Biz'],
                  Parent_Task:["three", "four", "two"],
                  Role_task:["three", "four", "two"],

                  data:'Description of Task'  ,
                };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getDataEdit = this.getDataEdit.bind(this);
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
     this.state.Category
      );
    event.preventDefault();
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