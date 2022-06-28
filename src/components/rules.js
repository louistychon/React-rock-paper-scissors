import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rulespicture from '../design/images/image-rules.svg';
import "./rules.css"

export default function Rules() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
        return(
            <div>
            <Button className="rules" onClick={handleOpen}>Rules</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box-modal">
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Rules
                </Typography>
                <img src={Rulespicture}/>
                </Box>
            </Modal>
            </div>)
}

