import React from 'react'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Back from "./common/Back";
import Typography from "@material-ui/core/Typography";

const Deliverable = ({title, description, schedule, deliverable, classes}) => {
  return (
    <div className={classes.bigContainer}>
      <Paper className={classes.paper}>
        <div className={classes.topInfo}>
          <div>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {description}
            </Typography>
          </div>
        
        </div>
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <Typography
              style={{ textTransform: "uppercase" }}
              color="secondary"
              gutterBottom
            >
              Schedule
            </Typography>
            <Typography variant="h5" gutterBottom>
            {schedule}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              style={{ textTransform: "uppercase" }}
              color="secondary"
              gutterBottom
            >
              Deliverable
            </Typography>
            <Typography variant="h5" gutterBottom>
            {deliverable}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Deliverable