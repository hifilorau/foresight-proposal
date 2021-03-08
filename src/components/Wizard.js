import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
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
import { useLocation } from 'react-router-dom';
import Deliverable from "./Deliverable"

const qs = require("query-string");
const backgroundShape = require("../images/shape.svg");

const numeral = require("numeral");
numeral.defaultFormat("0,000");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary["A100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 10,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  smallContainer: {
    width: "60%"
  },
  bigContainer: {
    width: "80%"
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stepGrid: {
    width: "80%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  stepper: {
    backgroundColor: "transparent"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 42
  },
  formControl: {
    width: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  borderColumn: {
    borderBottom: `1px solid ${theme.palette.grey["100"]}`,
    paddingBottom: 24,
    marginBottom: 24
  },
  flexBar: {
    marginTop: 32,
    display: "flex",
    justifyContent: "center"
  }
});

const getSteps = () => {
  return ["Discovery", "Mapping", "Scanning", "Identifying", "Scenarios", "Analysis", "Strategies", "Workshop"];
};

class Wizard extends Component {
  state = {
    activeStep: 0,
    receivingAccount: "Home Account",
    repaimentAccount: "Saving Account",
    termsChecked: false,
    labelWidth: 0
  };

  componentDidMount() {}

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleTerms = event => {
    this.setState({ termsChecked: event.target.checked });
  };

  stepActions() {
    // if (this.state.activeStep === 3) {
    //   return "Accept";
    // }
    // if (this.state.activeStep === 4) {
    //   return "Send";
    // }
    if (this.state.activeStep === 7) {
      return "Done";
    }
    return "Next";
  }

  goToDashboard = event => {
    const queryString = this.props.location.search;

    this.props.history.push({
      pathname: "/dashboard",
      search: queryString
    });
  };

  render() {
    const { classes } = this.props;
    const queryString = this.props.location.search;
    const parsed = queryString ? qs.parse(queryString) : {};
    const steps = getSteps();
    const { activeStep } = this.state;
    const {pathname} = this.props.location;
    console.log('route', pathname);
    let isPDF = pathname === "/pdf-view" ? true : false;
    console.log(isPDF, activeStep)

    return (
      <React.Fragment>
        {/* <CssBaseline />
        <div className={classes.root}> */}
      
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                <Back />
                <div className={classes.stepContainer}>
                  <div className={`${classes.bigContainer} process-class`}>
                    <Stepper
                      classes={{ root: classes.stepper }}
                      activeStep={isPDF ? null : activeStep}
                      alternativeLabel
                    >
                      {steps.map(label => {
                        return (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        );
                      })}
                    </Stepper>
                  </div>
                  {(activeStep === 0 || isPDF) && (
                
                        <Deliverable 
                        label="1"
                        classes={classes}
                        title="Discovery"
                        description=" Initial Interview with 3-5 stakeholders to get a better understanding of the domain and challenges NACS is facing"
                        schedule="4 weeks"
                        deliverable="N/A"
                      
                      />
                  )}
                  {(activeStep === 1 || isPDF) && (
                 
                      <Deliverable 
                        label="2"
                        classes={classes}
                        title="Mapping"
                        description="Mapping key categories and subcategories to gain a better understanding of the system dynamics.
                        "
                        schedule="4 weeks"
                        deliverable="Domain Map & Relevant High Level Systems Maps"
                      
                      />
                    
                  )}
                  {(activeStep === 2 || isPDF) &&  (
                    <Deliverable 
                    label="3"
                    classes={classes}
                    title="Scanning"
                    description="Building a scanning archive of trends, articles, reports, signals, and plans.
                    "
                    schedule="4 weeks"
                    deliverable="Searchable, Filterable, Scored Scanning Library"/>
                  )}
                  {(activeStep === 3 || isPDF)  && (
                    <Deliverable 
                    label="4"
                    classes={classes}
                    title="Identify"
                    description="Identifying and analyzing key trends, drivers, issues, and uncertainties that will affect the business of the college store and the services that both it and that NACS can provide it.
                    "
                    schedule="2 weeks"
                    deliverable="Domain Map & Relevant High Level Systems Maps"/>
                  )}
                   {(activeStep === 4 || isPDF) && (
                    <Deliverable 
                    label="5"
                    classes={classes}
                    title="Scenarios"
                    description="Develop scenarios outlining a spectrum of potential futures for the role of NCAS in the landscape of the college store and the education system."
                    schedule="4 weeks"
                    deliverable="Scenario Guide that contains four scenarios and a range of potential futures"/>
                  )}
                  {(activeStep === 5 || isPDF)  && (
                    <Deliverable 
                    label="6"
                    classes={classes}
                    title="Analysis"
                    description="Parse out dominant strategic issues and scan for potential sources where new risks, opportunities, and disruptions will emerge."
                    schedule="4 weeks"
                    deliverable="Domain Map & Relevant High Level Systems Maps"/>
                  )}
                  {(activeStep === 6 || isPDF)  && (
                    <Deliverable
                    label="7"
                    classes={classes}
                    title="Strategy"
                    description="Synthesize strategies, routes to optimization, and actions and responses to plausible risks and opportunities"
                    schedule="4 weeks"
                    deliverable="Strategy Guide"/>
                  )}
                  {(activeStep === 7 || isPDF) && (
                    <Deliverable
                    label="8" 
                    classes={classes}
                    title="Workshop"
                    description="Mapping key categories and subcategories to gain a better understanding of the system dynamics.
                    "
                    schedule="Two Days"
                    deliverable="Two One Day Workshops"/>
                  )}

                  { !isPDF && (
                  <div className={classes.flexBar}>
                    { activeStep !== 0 &&  (
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.backButton}
                        size="large"
                      >
                        Back
                      </Button>
                    )} 
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={
                        activeStep !== 7 ? this.handleNext : null
                      }
                      size="large"
                      // disabled={
                      //   this.state.activeStep === 3 && !this.state.termsChecked
                      // }
                    >
                      {this.stepActions()}
                    </Button>
                  </div> )}
                </div> 
              </Grid>
            </Grid>
          </Grid>
        {/* </div> */}
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Wizard));

