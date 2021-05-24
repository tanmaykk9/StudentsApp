import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Modal, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { studentService, alertService } from '../services';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles((theme) => ({
    table: {
      width: 800,
      margin: 'auto',
      position: 'relative'
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    backButton: {
        marginTop: "50px",
        display: "inline-block",
        display: "flex",
        justifyContent: "center"
    },
    loaderStyle: {
      display: "flex",
      position: "absolute",
      justifyContent: "center",
      top: "50%",
      left: "50%"
    },
    selectedRow: {
      cursor: 'pointer',
      "&:hover": {
        backgroundColor: '#3f51b5',
        "& td": {color: '#fff'}
      }
    }
  }));

  function createData(studentName, subjectName, marks) {
    return { studentName, subjectName, marks };
  }


function Edit({ history, match }) {
    const classes = useStyles();
    const { id } = match.params;
    const isNotStudent = !id;

    const [student, setStudent] = useState([]);
    const [modalStyle] = useState(getModalStyle());
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState({});

    const tableData = [];

    useEffect(() => {
      if(!isNotStudent) {
        // get student and set values in table
        studentService.getById(id).then(student => {
          setStudent(student);
        });
      }
    }, []);
    tableData.push(student);

    const handleOpen = () => {
      
    }

    const handleClose = () => {
      setOpen(false);
    }


    // display teachers name on row click
    const displayTeachersName = (rowData) => {
      setOpen(true);
      setModalContent(rowData);      
    }


    return (
    <div className="student-edit">
    <h2>In Student Edit Page</h2>
    <TableContainer component={Paper} className={classes.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Subject Name</TableCell>
            <TableCell>Marks/100</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {tableData && tableData.length === 0 &&
            <CircularProgress className={classes.loaderStyle} />
        }
        {tableData && tableData.length !== 0 &&
              tableData.map((row, idx) => {
                if(row && row.length !== 0) 
                return (
                  <React.Fragment>
                    <TableRow>
                      <TableCell rowSpan={row.subjects.length + 1}>
                        {row.first_name} {row.last_name}
                      </TableCell>
                    </TableRow>
                    {row && row !== undefined &&
                      row.subjects.map(details => (
                        <TableRow key={details.id} className={classes.selectedRow}>
                          <TableCell onClick={() => displayTeachersName(details)}>{details.name}</TableCell>
                          <TableCell>{details.marks}</TableCell>
                        </TableRow>
                      ))
                    }
                  </React.Fragment>
                )
              })
          }
        </TableBody>
      </Table>
    </TableContainer>
    <Link to=".." className={classes.backButton}>
        <Button variant="contained" color="primary" disableElevation>Go Back</Button>
    </Link>
    <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
    >
        <div style={modalStyle} className={classes.paper}>
            <h2>Student Information</h2>
            <p>
              Teacher Assigned :-  {modalContent.teacher}
            </p>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Close
            </Button>
        </div>
    </Modal>
    </div>
    );
}

export { Edit };