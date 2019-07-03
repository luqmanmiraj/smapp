import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function SelectOne(props) {
  const classes = useStyles();
// const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

 

  function handleClose() {
    setOpen(false);
  }
console.log(props);
  function handleOpen() {
    setOpen(true);
  }

  return (
    
     
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">{props.title}</InputLabel>
        <Select
          open={open}
          name={props.name}
          onClose={handleClose}
          onOpen={handleOpen}
          value={props.selectedone}
          onChange={props.onChange1}
          inputProps={{
            name: props.name,
            id: 'demo-controlled-open-select',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          
          </MenuItem>
          {  props.options.map ( valuef =>  <MenuItem value={valuef}>{valuef}</MenuItem> ) }
          
        </Select>
      </FormControl>
   
  );
}
