import React, { useState } from 'react'
import './parcelForm.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ParcelForm(props) {

    const [info, setinfo] = useState("");
    const [cost, setcost] = useState("");
    const [starting_location, setStarting_location] = useState("");
    const [ending_location, setEnding_location] = useState("");
    const [sender_name, setSender_name] = useState("");
    const [sender_address, setSender_address] = useState("");
    const [sender_phone, setSender_phone] = useState("");
    const [reciever_name, setReciever_name] = useState("");
    const [reciever_address, setReciever_address] = useState("");
    const [reciever_phone, setReciever_phone] = useState("");


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onsubmit({
          id: Math.floor(Math.random()*1000),
          info: info,
          cost: cost,
          starting_location: starting_location,
          ending_location: ending_location,
          sender_name: sender_name,
          sender_address: sender_address,
          sender_phone: sender_phone,
          reciever_name: reciever_name,
          reciever_address: reciever_address,
          reciever_phone: reciever_phone
        });
        setEnding_location("");
        setReciever_address("");
        setReciever_name("");
        setReciever_phone("");
        setSender_address("");
        setSender_name("");
        setSender_phone("");
        setStarting_location("");
        setcost("");
        setinfo("");
        handleClose();
    }

    return (
      <div className='parcelForm'>
        

        <Button className='ModalOpenerAdd' onClick={handleOpen}>Add parcel</Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modalBox' sx={style}>
          <div className='closeHead'>
            <h1 className='modalHeading'>Parcel Form</h1>
            <button className='modalCloser' onClick={() => handleClose()}><CloseIcon /></button>
          </div>
          <form className="parcelInfoForm"  onSubmit={handleSubmit}>
            <div className='labelInput'>
              <p className='para'>Product Info :</p>
              <textarea
              required
              placeholder='Info of Product'
              value={info}
              rows="2"
              name='text'
              onChange={(e) => setinfo(e.target.value)}
            />
            </div>
          <div className='labelInput mr-top'>
            <p className='para'>Cost :</p>
            <input
              type="text"
              required
              placeholder='Cost'
              value={cost}
              name='text'
              className='infoInput cost'
              onChange={(e) => setcost(e.target.value)}
            />
          </div>
          <div className='locations'>
            
            <div className='labelInput mr-top'>
            <p className='para'>Start Location :</p>
            <input
            type="text"
            required
            placeholder='Starting Location'
            value={starting_location}
            name='text'
            onChange={(e) => setStarting_location(e.target.value)}
          />
            </div>
            
            <div className='labelInput'>
            <p className='para'>End Location :</p>
            <input
            type="text"
            required
            placeholder='Ending Location'
            value={ending_location}
            name='text'
            onChange={(e) => setEnding_location(e.target.value)}
          />
          </div>
          </div>
          <div className='senderInfo'>
            
          <div className='labelInput  mr-top'>
          <p className='para'>Sender's name :</p>
            <input
            type="text"
            required
            placeholder="Sender's Name"
            value={sender_name}
            name='text'
            onChange={(e) => setSender_name(e.target.value)}
          />
          </div>
          
          <div className='labelInput'>
          <p className='para'>Sender's number :</p>
            <input
            type="text"
            required
            placeholder="Sender's Number"
            value={sender_phone}
            name='text'
            onChange={(e) => setSender_phone(e.target.value)}
          />
          </div>

          <div className='labelInput'>
          <p className='para'>Sender's address :</p>
            <input
            type="text"
            required
            placeholder="Sender's Address"
            value={sender_address}
            name='text'
            onChange={(e) => setSender_address(e.target.value)}
          />
          </div>
          </div>
          <div className='recieverInfo'>
          <div className='labelInput mr-top'>
            <p className='para'>Reciever's name :</p>
              <input
              type="text"
              required
              placeholder="Reciever's Name"
              value={reciever_name}
              name='text'
              onChange={(e) => setReciever_name(e.target.value)}
            />
          </div>
          
          <div className='labelInput'>
          <p className='para'>Reciever's number : </p>
            <input
            type="text"
            required
            placeholder="Reciever's Number"
            value={reciever_phone}
            name='text'
            onChange={(e) => setReciever_phone(e.target.value)}
          />
          </div>
          
          <div className='labelInput'>
          <p className='para'>Reciever's address :</p>
            <input
            type="text"
            required
            placeholder="Reciever's Address"
            value={reciever_address}
            name='text'
            onChange={(e) => setReciever_address(e.target.value)}
          />
          </div>
          
          </div>
          <button>Submit</button>
        </form>
        
        </Box>
      </Modal>

        </div>
    )
}

export default ParcelForm