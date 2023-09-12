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
import { useState } from 'react';
import axios from 'axios';


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

function AdminAddTestCase() {
    const [open, setOpen] = React.useState(false);
    const [selectedQuestionId, setSelectedQuestionId] = React.useState('');
    const [question,setQuestion]=useState({ data: [] });
    const [testCases,setTestCases]=React.useState([]);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    React.useEffect(()=>{
        getQuestions();
    },[])

    const handleQuestionSelect = (event) => {
        setSelectedQuestionId(event.target.value);
    };

    const handleChange = async () => {
        // const res = await axios.post(`http://localhost:3001/api/questions/${selectedQuestionId}/testcases`,{
        //     input: ,
        //     output: ,
        //     hidden: 
        // }) ;
        // console.log(res)
        console.log(" question with ID and test case", selectedQuestionId," Test",testCases);
    };

    const getQuestions = async ()=>{
        const  res = await axios.get('http://localhost:3001/api/questions')
        setQuestion(res)
        
      }

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
        <Button onClick={handleOpen}>Add TestCases</Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        ><Box sx={style}>
        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            select the question to Add testCase
        </Typography>
        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>

        <Box sx={style}>
            <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            </Typography>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
             <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select Question</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedQuestionId}
                    label="select the question to be deleted"
                    onChange={handleQuestionSelect}
                    >
                         {question.data.map((item) => (
                                <MenuItem key={item._id} value={item._id}>
                                    {item.questionTitle}
                                </MenuItem>
                            ))}
                   
                    </Select>

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

                </FormControl>
                <Button onClick={handleChange}>Update</Button>
             </Box>
            </Typography>
          </Box> 

            </Typography>
          </Box>
        </Modal>
       
      </div>
      </div>
    );
  }

export default AdminAddTestCase