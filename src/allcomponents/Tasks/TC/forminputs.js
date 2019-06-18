import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
const inputsfunction = ()=>{
return( <div>




   <form onSubmit={() => {}}>
     <TextField
       id="name"
       name="name"
       label="Name"
       fullWidth

     />
     <TextField
       id="email"
       name="email"
       label="Email"
       fullWidth
     />
     <TextField
       id="password"
       name="password"
       label="Password"
       fullWidth
       type="password"
     />
     <TextField
       id="confirmPassword"
       name="confirmPassword"
       label="Confirm Password"
       fullWidth
       type="password"
     />
     <Button
       type="submit"
       fullWidth
       variant="raised"
       color="primary"
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