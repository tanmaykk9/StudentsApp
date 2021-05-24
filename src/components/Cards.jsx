import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardHeader } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "auto"
  },
  cardMain: {
    textAlign: "center",
    background: "#8e24aa",
    boxShadow: "4px 4px 20px 1px rgba(0 0 0 / 20%)",
    padding: "50px"
  },
  cardTitle: {
    color: "#ffffff",
    fontWeight: 900
  },
  studentInfo: {
    fontWeight: 600
  }
});

function Cards({
  id,
  firstName,
  lastName,
  schoolClass,
  rollNo,
  dob,
  path
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          className={`MuiCardHeader-root ${classes.cardMain}`}
          title={id}
          classes={{
            title: classes.cardTitle,
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.studentInfo}>Roll Number:</span> {rollNo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.studentInfo}>Class:</span> {schoolClass}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span className={classes.studentInfo}>Date of Birth:</span> {dob}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" color="primary" disabled={true}>
            Edit
          </Button>
        <Link to={`${path}/edit/${id}`}>
          <Button size="small" color="primary">
            View
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export { Cards }