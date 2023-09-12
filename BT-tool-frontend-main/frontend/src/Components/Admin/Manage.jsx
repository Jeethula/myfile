import React, { useState } from 'react';
import StudentForm from './StudentForm';
import GroupSelect from './GroupSelect';
import ModeSelect from './ModeSelect';
import GroupedStudents from './GroupedStudents';





function Manage() {
  const [students, setStudents] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedMode, setSelectedMode] = useState('');

  const groups = ['Group A', 'Group B', 'Group C'];
  const modes = ['SECE', 'BIT', 'CIT'];

  const handleGroupChange = (e) => {
    setSelectedGroup(e.target.value);
  };

  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
  };

  const addStudent = (studentName) => {
    setStudents([...students, { name: studentName, group: selectedGroup, mode: selectedMode }]);
  };

  return (
    <div>
      <StudentForm addStudent={addStudent} />
      <div style={{ margin: '20px 0' }}>
    <GroupSelect groups={groups} selectedGroup={selectedGroup} handleGroupChange={handleGroupChange} />
  </div>
  <div style={{ margin: '20px 0' }}>
    <ModeSelect modes={modes} selectedMode={selectedMode} handleModeChange={handleModeChange} />
  </div>
  <div style={{ margin: '20px 0' }}>
    <GroupedStudents students={students} />
  </div>


    </div>
  );
}

export default Manage;
