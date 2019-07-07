import React from 'react';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


//import CKEditor from 'ckeditor4-react';
//import SelectCat from './SelectCat';
//import Selectone from './select-one';
/*import PickDate from './pick-date';
*/import ChPrg from './checkbox';
import TwoWayBinding from './Rend_ckeditor';


const inputsfunction = (props)=>{

  const {
    values: { name, p_task  },
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
      console.log(name + p_task );
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
    
   {   /*
     
<SelectCat title ={"Role" } name ="cat_task" id = "cat_task" name1 ={   {  cats: [
  'one',
  'two',
  'three',
  'four',
  'five'
] } }   />
   */}

{ /* <Selectone  title = {"Category"} options = {  ["Health" , "Life Style","Biz" , "Home" , "Study"]   }/>

<PickDate/>*/}
<ChPrg/>

     
    
    

{ /*
<CKEditor      
               data="<p>This is a CKEditor 4 instance created by ️⚛️ React.</p>" 

               onChange={evt => console.log( evt.data )}

/> */}
<TwoWayBinding    /> 

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