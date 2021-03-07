import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InstructionDialog from "./dialogs/InstructionDialog";
import SwipeDialog from "./dialogs/SwipeDialog";
import Topbar from "./Topbar";
import { ListItem } from '@material-ui/core';
import Wizard from "./Wizard"

const backgroundShape = require("../images/shape.svg");

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  rangeLabel: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing(2)
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: "center"
  },
  block: {
    padding: theme.spacing(2)
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  inlining: {
    display: "inline-block",
    marginRight: 10
  },
  buttonBar: {
    display: "flex"
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  noBorder: {
    borderBottomStyle: "hidden"
  },
  loadingState: {
    opacity: 0.05
  },
  loadingMessage: {
    position: "absolute",
    top: "40%",
    left: "40%"
  }
});

class Main extends Component {
  state = {
    learnMoredialog: false,
    getStartedDialog: false
  };

  componentDidMount() {}

  openDialog = event => {
    this.setState({ learnMoredialog: true });
  };

  dialogClose = event => {
    this.setState({ learnMoredialog: false });
  };

  openGetStartedDialog = event => {
    this.setState({ getStartedDialog: true });
  };

  closeGetStartedDialog = event => {
    this.setState({ getStartedDialog: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={4}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
             
              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div>
                      <div className='new-box'>
                      <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Overview
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Beyond the Campus Store: The Future of the University Campus Store and the NACS, 2021-2031
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                    Changes in our education and commerce industries are reshaping how the campus store fits into the lives of students and universities. NACS is looking to for insight and to better understand the multiple landscapes of the future and how it can best position itself to provide value to a vast network of campus stores that universities, students, and professors so much rely on. 
                    </Typography>
                      </div>
                      <div className={classes.alignRight}>
                        <Button
                          color="primary"
                          variant="contained"
                          className={classes.actionButtom}
                        >
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>

              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                    <div>
                      <div className='new-box'>
                      <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Goals
                    </Typography>

                    <ListItem>
                      <Typography variant="body1" gutterBottom>
                      Provide insight and depth into the key, issues, drivers, and uncertainties that most likely could impact the future of NACS for the next 10 years.  
                      </Typography>
                    </ListItem>
                   
                    <ListItem>
                      <Typography variant="body1" gutterBottom>
                      Develop and implement a living library of articles/scans that will help the NACS monitor and watch for disruptive trends that will affect the industry for the next 25 years. 
                      </Typography>
                    </ListItem>
                    
                    <ListItem>
                      <Typography variant="body1" gutterBottom>
                      Help seed, nurture, and champion a culture of strategic foresight at NACS so that the deliverables and insights we provide can continue to be built and iterated upon from within the organization in the future 
                      </Typography>
                    </ListItem>
                    </div>
                  </div>
                  </Paper>
                </Grid>
              </Grid>

              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Process and Schedule
                    </Typography>
                    <Wizard />
                  </Paper>
                </Grid>
              </Grid>

              <Grid container item xs={12}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>
                  <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Deliverables
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      In addition to the items listed in the above table we will provide a final report, in electronic, print, and interactive online versions that contains all of our research in an easily digestible way. 
                    </Typography>
                    <Typography
                      style={{ textTransform: "uppercase" }}
                      color="secondary"
                      gutterBottom
                    >
                      Cost
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      $45,000
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>












            </Grid>
          </Grid>
          <SwipeDialog
            open={this.state.learnMoredialog}
            onClose={this.dialogClose}
          />
          <InstructionDialog
            open={this.state.getStartedDialog}
            onClose={this.closeGetStartedDialog}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(withStyles(styles)(Main));
