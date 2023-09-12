import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const StudentForm = ({ addStudent }) => {
  const [studentName, setStudentName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(studentName);
    setStudentName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '37ch' },
          }}
          noValidate
          autoComplete="off"
          >
          <TextField 
            id="outlined-basic" 
            label="Student Name" 
            variant="outlined" 
            type="text"
            placeholder="Student Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            
            />
          </Box>
          <button 
          type="submit"
          style={{
            backgroundColor: '#039DF6', 
            color: 'white',          
            border: 'none',          
            padding: '10px 20px',    
            borderRadius: '5px',     
            cursor: 'pointer'        
                  }}
                >
          Add
        </button>

      </form>
    </div>
  );
};

export default StudentForm;

