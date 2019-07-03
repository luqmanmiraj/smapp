import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Ckedit from './ckeditorinputall';
import Selectone from './select-one';



export default class inputsall extends Component{
  constructor(props) {
    super(props);
    this.state = {title: '',
                  document:'',
                  parentTask:'Health',
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
    alert('A name was submitted: ' + this.state.title +this.state.data+this.state.document+this.state.parentTask);
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

<Selectone name={'parentTask'} selectedone={this.state.parentTask} onChange1={this.handleChange} title = {"Category"} options = {  ["Health" , "Life Style","Biz" , "Home" , "Study"]   } />

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