import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ModeSelect = ({ modes, selectedMode, handleModeChange }) => {
  return (
    <div>
     <Box sx={{ minWidth: 120 }}>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Mode</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectedMode}
    label="Mode"
    onChange={handleModeChange}
  >
    {modes.map((mode) => (
    <MenuItem key={mode} value={mode}>
    {mode}
    </MenuItem>
    ))}
   
  </Select>
</FormControl>
</Box>
    </div>
  );
};

export default ModeSelect;

