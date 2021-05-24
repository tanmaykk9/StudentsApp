import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { studentService } from '../services/student.service';
import { Container, Grid, makeStyles, CircularProgress, Typography } from '@material-ui/core';
import { Cards } from '../components'; 

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  loaderStyle: {
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    top: "50%",
    left: "50%"
  }
}));

function List({ match }) {
  const { path } = match;
  const [ students, setStudents ] = useState(null);
  const { root, loaderStyle } = useStyles();

  useEffect(() => {
    studentService.getAll().then(x => setStudents(x));
  }, []);
  console.log(students);
    return (
      <React.Fragment>
      <Container maxWidth="xl" className="student-list">
        <Grid container spacing={3}>
          {students && students.length !== 0 &&
            students.map((items, idx) => {
              return (
                <Grid key={items.id} item xs={4}>
                  <Cards 
                    id={items.id} 
                    firstName={items.first_name} 
                    lastName={items.last_name} 
                    schoolClass={items.class} 
                    rollNo={items.roll_no} 
                    dob={items.dob}
                    path={path}
                  />
                </Grid>
              )
            })
          }
          {students && !students.length && 
            <Typography variant="body2" color="textSecondary" component="p">
              No Students to Display!
            </Typography>
          }
        </Grid>
      </Container>
          {!students &&
            <CircularProgress className={loaderStyle} />
          }
      </React.Fragment>
    );
}

export { List };