import React from 'react';
import Forminputs from './forminputs';
import { Formik } from "formik";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
        .spacing.unit * 5}px`
    },
    container: {
      maxWidth: "200px"
    }
   });


class formfun extends React.Component {


    constructor(props) {
        super(props);
        this.state = {};
      }

    render(){

        const classes = this.props;



return( 
<React.Fragment>
          <div className={classes.container}>
         <Paper elevation={1} className={classes.paper}>

<h2>Add form component with thier fields</h2>
<Formik
             render={props => <Forminputs {...props} />}
           />
           </Paper>
       </div>
     </React.Fragment>



)
 } 


}
export default withStyles(styles)(formfun);
