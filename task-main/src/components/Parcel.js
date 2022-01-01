import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './parcel.css'

function Parcel({todos}) {
  
    const [open, setOpen] = useState(false);
    const [id, setId] = useState("");

    return (
      <TableContainer className='dataTable' component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell className="tHeading">Product Info</TableCell>
            <TableCell className="tHeading" align="right">Cost</TableCell>
            <TableCell className="tHeading" align="right">Starting Location</TableCell>
            <TableCell className="tHeading" align="right">Ending Location</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((row) => (
            <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton className="arrow"
                aria-label="expand row"
                size="small"
                onClick={() => {
                  if(open==true && id==row.id){
                    setOpen(false);
                    setId("");
                  }
                  else{
                    setOpen(true);
                    setId(row.id);
                  }
                }}
              >
                {(open && id==row.id) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              {row.info}
            </TableCell>
            <TableCell align="right">{row.cost}</TableCell>
            <TableCell align="right">{row.starting_location}</TableCell>
            <TableCell align="right">{row.ending_location}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={(open && id==row.id)} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                  <Typography className="tHeading" variant="h6" gutterBottom component="div">
                    Contact Info
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell className="tHeading small">Reciever/Sender</TableCell>
                        <TableCell className="tHeading small">Name</TableCell>
                        <TableCell className="tHeading small" align="right">Number</TableCell>
                        <TableCell className="tHeading small" align="right">Address</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            Sender
                          </TableCell>
                          <TableCell>{row.sender_name}</TableCell>
                          <TableCell align="right">{row.sender_phone}</TableCell>
                          <TableCell align="right">{row.sender_address}</TableCell>
                        </TableRow>
                        <TableRow key={row.id}>
                          <TableCell component="th" scope="row">
                            Reciever
                          </TableCell>
                          <TableCell>{row.reciever_name}</TableCell>
                          <TableCell align="right">{row.reciever_phone}</TableCell>
                          <TableCell align="right">{row.reciever_address}</TableCell>
                        </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
          </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
    
    
    // todos.map((todo) => (
    //         <div key={todo.id}>
    //             info:{todo.info}<br />
    //             cost:{todo.cost}<br />
    //             starting_location:{todo.starting_location}<br />
    //             ending_location:{todo.ending_location}<br />
    //             sender_name:{todo.sender_name}<br />
    //             sender_address:{todo.sender_address}<br />
    //             sender_phone:{todo.sender_phone}<br />
    //             reciever_name:{todo.reciever_name}<br />
    //             reciever_address:{todo.reciever_address}<br />
    //             reciever_phone: {todo.reciever_phone}<br />
    //         </div>
}

export default Parcel