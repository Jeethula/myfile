import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';


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

function AdminCreateQuestion() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [questionTitle, setQuestionTitle] = React.useState('');
    const [questionDescription,setQuestionDescription]=React.useState('');
    const [testCases,setTestCases]=React.useState([]);

    
    const handleChange = (event) => {
        setQuestionTitle(event.target.value);
    };

    const handleChange2 = (event) => {
        setQuestionDescription(event.target.value);
    };

    const handleChange3 = (event) => {
        setTestCases([...testCases, event.target.value]); 
    };



  
  
    return (
      <div>


          <div style={{
              width: '200px',
              height: '200px',
              backgroundColor: '#f2f2f2',  // Light gray background
              border: '5px solid #333',   // Thick black border
              borderRadius: '10px',       // Rounded corners
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',  // Subtle shadow
              fontSize: '18px',
              color: '#333',
              fontWeight: 'bold',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              marginTop:'0px',
              marginLeft:'0px'

            
          }}>
        <Button onClick={handleOpen}>Add Questions</Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        ><Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>

        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            value={questionTitle}
            onChange={handleChange}
        >
        <TextField id="outlined-basic" label="Question Title" variant="outlined" />
        </Box>


        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            value={questionDescription}
            onChange={handleChange2}
        >
        <TextField id="outlined-basic" label="Question Description" variant="outlined" />
        </Box>


          <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            onChange={handleChange3}
        >
        <TextField id="outlined-basic" label="Test Cases" variant="outlined" />
        </Box>

            </Typography>
          </Box>
        </Modal>

        
       { console.log(questionTitle,questionDescription,testCases)}

       
      </div>
      </div>
    );
  }

export default AdminCreateQuestion



{/* <Box sx={style}>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
             <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type of Viewer</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={Type}
                    label="Type of Viewer"
                    onChange={handleChange}
                    >
                    <MenuItem value={"Student"}>Student</MenuItem>
                    <MenuItem value={"collegeAdmin"}>college Admin</MenuItem>
                    <MenuItem value={"BtAdmin"}>BT Admin</MenuItem>
                    </Select>
                </FormControl>
             </Box>
            </Typography>
          </Box> */}
