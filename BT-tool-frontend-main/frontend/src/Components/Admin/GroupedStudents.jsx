import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

function GroupedStudents({ students }) {
  // Create an object to group students by their group and mode
  const groupedData = {};

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  students.forEach((student) => {
    const { group, mode } = student;
    if (!groupedData[group]) {
      groupedData[group] = {};
    }
    if (!groupedData[group][mode]) {
      groupedData[group][mode] = [];
    }
    groupedData[group][mode].push(student);
  });

  return (
    // <div>
    //   <h2>Grouped Students</h2>
    //   {Object.keys(groupedData).map((group) => (
    //     <div key={group}>
    //       <h3>{group}</h3>
    //       {Object.keys(groupedData[group]).map((mode) => (
    //         <div key={mode}>
    //           <h4>{mode}</h4>
    //           <ul>
    //             {groupedData[group][mode].map((student, index) => (
    //               <li key={index}>
    //                 {student.name}
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //       ))}
    //     </div>
    //   ))}
    // </div>
    <div>
<Button onClick={handleOpen}> Students List</Button>
<Modal
  keepMounted
  open={open}
  onClose={handleClose}
  aria-labelledby="keep-mounted-modal-title"
  aria-describedby="keep-mounted-modal-description"
><Box sx={style}>
<Typography id="keep-mounted-modal-title" variant="h6" component="h2">
Students List with Group
</Typography>
<Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
    
<div>
      <h2>Grouped Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Group</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedData).map((group) => (
            <React.Fragment key={group}>
              {Object.keys(groupedData[group]).map((mode) => (
                <React.Fragment key={mode}>
                  {groupedData[group][mode].map((student, index) => (
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{student.group}</td>
                      <td>{student.mode}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>

    </Typography>
  </Box>
</Modal>

</div>
  );
}

export default GroupedStudents;

{/* <div>
<Button onClick={handleOpen}>Create group of Students</Button>
<Modal
  keepMounted
  open={open}
  onClose={handleClose}
  aria-labelledby="keep-mounted-modal-title"
  aria-describedby="keep-mounted-modal-description"
><Box sx={style}>
<Typography id="keep-mounted-modal-title" variant="h6" component="h2">
Create group of Students
</Typography>
<Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
    
<div>
      <h2>Grouped Students</h2>
      {Object.keys(groupedData).map((group) => (
        <div key={group}>
          <h3>{group}</h3>
          {Object.keys(groupedData[group]).map((mode) => (
            <div key={mode}>
              <h4>{mode}</h4>
              <ul>
                {groupedData[group][mode].map((student, index) => (
                  <li key={index}>
                    {student.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>

    </Typography>
  </Box>
</Modal>

</div> */}
