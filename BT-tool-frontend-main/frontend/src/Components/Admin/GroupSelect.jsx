import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const GroupSelect = ({ groups, selectedGroup, handleGroupChange }) => {
  return (
    <div>
     <Box sx={{ minWidth: 120 }}>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Group</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectedGroup}
    label="Group"
    onChange={handleGroupChange}
  >
    {groups.map((group) => (
          <MenuItem key={group} value={group}>
            {group}
          </MenuItem>
        ))}
   
  </Select>
</FormControl>
</Box>
    </div>
  );
};

export default GroupSelect;




