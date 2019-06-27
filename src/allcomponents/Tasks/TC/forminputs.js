import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


import CKEditor from 'ckeditor4-react';
import SelectCat from './SelectCat';
import Selectone from './select-one';
import PickDate from './pick-date';
import ChPrg from './checkbox';
const inputsfunction = (props)=>{

  const {
    values: { name, p_task ,email, password, confirmPassword },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
 
  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  

return( <div>




<form
     onSubmit={() => {
       alert("submitted");
     }}
   >
     <TextField
       id="name"
       name="name"
       helperText={touched.name ? errors.name : ""}
       error={touched.name && Boolean(errors.name)}
       label="Name"
       value={name}
       onChange={change.bind(null, "name")}
       fullWidth

     />


<TextField
       id="p_task"
       name="p_task"
       helperText={touched.p_task ? errors.p_task : ""}
       error={touched.p_task && Boolean(errors.p_task)}
       label="Parent Task"
       value={p_task}
       onChange={change.bind(null, "p_task")}
       fullWidth

     />
      <TextField
       id="gr-task"
       name="gr-task"
       helperText={touched.name ? errors.name : ""}
       error={touched.name && Boolean(errors.name)}
       label="Group of Task"
       value={name}
       onChange={change.bind(null, "gr-task")}
       fullWidth

     />
      <TextField
       id="go-task"
       name="go-task"
       helperText={touched.name ? errors.name : ""}
       error={touched.name && Boolean(errors.name)}
       label="Task Related to Goal"
       value={name}
       onChange={change.bind(null, "go-task")}
       fullWidth

     />
     <TextField
       id="cat-task"
       name="cat-task"
       helperText={touched.name ? errors.name : ""}
       error={touched.name && Boolean(errors.name)}
       label="Category of Task"
       value={name}
       onChange={change.bind(null, "cat-task")}
       fullWidth

     />
<SelectCat name ="cat-task" id = "cat-task" name1 ={   {  cats: [
  'Health',
  'Business',
  'Study',
  'Home Work',
  'Life Style'
] } }   />

<Selectone/>

<PickDate/>
<ChPrg/>

     <TextField
       id="email"
       name="email"
       helperText={touched.email ? errors.email : ""}
       error={touched.email && Boolean(errors.email)}
       label="Email"
       fullWidth
       value={email}
       onChange={change.bind(null, "email")}

     />
     <TextField
       id="password"
       name="password"
       helperText={touched.password ? errors.password : ""}
       error={touched.password && Boolean(errors.password)}
       label="Password"
       fullWidth
       type="password"
       value={password}
       onChange={change.bind(null, "password")}

     />
     <TextField
       id="confirmPassword"
       name="confirmPassword"
       helperText={touched.confirmPassword ? errors.confirmPassword : ""}
       error={touched.confirmPassword && Boolean(errors.confirmPassword)}
       label="Confirm Password"
       fullWidth
       type="password"
       value={confirmPassword}
       onChange={change.bind(null, "confirmPassword")}

     />


<CKEditor      
               data="<p>This is a CKEditor 4 instance created by ️⚛️ React.</p>" 



/>


     <Button
       type="submit"
       fullWidth
       variant="raised"
       color="primary"
       disabled={!isValid}
     >
       Submit
     </Button>
   </form>
 





<p>https://dev.to/finallynero/react-form-using-formik-material-ui-and-yup-2e8h</p>
<p> Title  </p>
<p> Description ckeditor </p>
<p> Attach document  </p>
<p> parrent Task  </p>
<p> Group  </p>
<p> Goal  </p>
<p> category of Task </p>
<p> Priority </p>
<p> Start time   </p>
<p> End time</p>
<p> Time period with regular time</p>
<p> Time period with min Time</p>
<p> Repeating Period </p>
<p> Progress   </p>
<p> Tootip/hover on title</p>
<p> Performance / Rating  </p>
<p> Start date   </p>
<p> End time / Deadline </p>
<p> Repeat until progress reaches 100% checkbox </p>

</div> );

}
export default inputsfunction;