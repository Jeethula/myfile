import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { loadLanguage } from '@uiw/codemirror-extensions-langs';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import axios, { } from 'axios';

  

function Compiler() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('cpp');
  const [output,setOutput]=useState('');
  const [input,setInput]=useState('');
  const [question,setQuestion]=useState({ data: [] });
  const [quesId,setQuesId]=useState('');
  const[questionDescription,setQuestionDescription]= useState('');
  const[testCases,setTestCases]=useState([]);



  useEffect(() => {
    const defaultLang = localStorage.getItem('default-language') || 'java';
    setLanguage(defaultLang);
    getQuestions();
  }, []);

  useEffect(() => {
    console.log(quesId, "question ID");

    const selectedQuestion = question.data.find(item => item._id === quesId);

    if (selectedQuestion) {
       setQuestionDescription(selectedQuestion.questionDescription);
       setTestCases(selectedQuestion.testCases || []);
      console.log("Question Description:", questionDescription);
      console.log("testCases",testCases)
    } else {
      console.log("Question not found.");
    }


   
  }, [quesId]);

      
   const getQuestions = async ()=>{
     const  res = await axios.get('http://localhost:3001/api/questions')
     setQuestion(res)
     
   }



  const handleCodeChange = (newValue) => {
    setCode(newValue);
    console.log(code,"hai")
  };

  const handleInputChange = (value)=>{
    setInput(value);
  }

  const setDefaultLanguage = () => {
    localStorage.setItem('default-language', language);
    console.log(`${language} set as default!`);
  };

  function formatCodeForBackend(userCode) {
    const formattedCode =userCode
        .replace(/\\/g, "\\")  // Escape backslashes
        .replace(/"/g, "\"")   // Escape double quotes
        .replace(/\n/g, "\n")   // Convert newlines to escape sequences
        .replace(/\t/g, "\t");  // Convert tabs to escape sequences

    return formattedCode;
}

const handleSubmit = async () => {
  const formattedCode = formatCodeForBackend(code);
  console.log(formattedCode)

  try {
      const response = await axios.post('https://comptrialonrender.onrender.com/compile', {
          code: formattedCode,
          input: input,
          lang: language
      });

      setOutput(response.data.output);
      setInput('');
  } catch (error) {
      console.error('Error sending data to backend:', error);
      console.log(formattedCode,"error")
  }
};


  const handleRun = async ()=>{
    const res = await axios.post(`/compile`,
    code,
    input,
    language

    );
    
    setOutput(res.output);
    setInput('');
  }

   
  return (
    <>
    <div style={{backgroundColor:'white'}}>
 
      <div style={{width:'1500px',height:'70px',display:'flex',backgroundColor:'#BACDD0',paddingTop:'10px'}}>
      
      <FormControl style={{width:'200px',margin: '0 10px' }}>
        <InputLabel id="demo-simple-select-label" style={{color:"black" }}>Language</InputLabel>
        
        <Select
          labelId="demo-simple-select-label"
          value={language}
          label="language"
          onChange={(e) => {
            const shouldSwitch = window.confirm(
              'Are you sure you want to change language? WARNING: Your current code will be lost.'
            );
            if (shouldSwitch) {
              setLanguage(e.target.value);
            }
          }}
          style={{color:'black'}}
         >
         
          <MenuItem value='Cpp'>C++</MenuItem>
          <MenuItem value='py'>Python</MenuItem>
          <MenuItem value='java'>Java</MenuItem>
          <MenuItem value='C'>C</MenuItem>
        </Select>
        </FormControl>
        
        <div style={{paddingTop:'10px'}}>
        <Button variant="contained" color="warning" onClick={setDefaultLanguage} style={{ margin: '0 10px' }}>
        Set Default
       </Button>
       </div>

       <div style={{alignItems:'center',paddingTop:'10px'}}>
        <Button variant="contained" color="success" onClick={handleRun} endIcon={<SendIcon /> } style={{ margin: '0 10px' }}>
        RUN
       </Button>
       </div>

      <div style={{alignItems:'center',paddingTop:'10px'}}>
        <Button variant="contained" color="primary" endIcon={<SendIcon /> } style={{ margin: '0 10px',marginLeft:'800px' }} onClick={handleSubmit}>
        Submit
       </Button>
       </div>
      </div>

      <div className="output" style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <CodeMirror
            value={code}
            height="600px"
            width="100%"
            theme={okaidia}
            extensions={[loadLanguage('tsx')]}
            onChange={handleCodeChange}
          />
        </div>
      </div>    



    <div className="output" style={{ display: 'flex' }}>
      <div style={{ height: '300px', width: '30%', backgroundColor: 'white', padding: '10px', border: '10px solid black' }}>
          <h1 style={{ textAlign: 'center' }}>OUTPUT</h1>
          <hr />
          <h2>{output}</h2>
          <p>Sample output</p>
        </div>

      <div style={{ height: '300px', width: '20%', backgroundColor: 'white', padding: '10px', border: '10px solid black' }}>
        <h1 style={{ textAlign: 'center' }}>Input</h1>
        <hr />
        <textarea name="input" id="input" cols="27" rows="10" onChange={handleInputChange}>{input}</textarea>
       
      </div>

    </div>
          
    </div>

    <div style={{display:'flex',flexDirection:'column',marginLeft:'800px',marginTop:'-900px'}}>
      <h1>QUESTIONS</h1>
  {question.data ? (
    question.data.map((item, index) => (
      <div key={index} style={{border:'5px solid black',maxHeight:'80px',maxWidth:'900px',minHeight:'80px',minHeight:'80px',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <button onClick={()=>setQuesId(item._id)}>{item.questionTitle}</button>
      </div>
    ))
  ) : (
    <p>Loading data...</p>
  )}
  <div>
    <h1>Question Description</h1>
    <div><p>{questionDescription}</p></div>
    <div>
  <h2>Test Cases</h2>
  <table>
    <thead>
      <tr>
        <th>Input</th>
        <th>Output</th>
      </tr>
    </thead>
    <tbody>
      {testCases.map((testCase, index) => (
        <tr key={index}>
          <td>{testCase.input}</td>
          <td>{testCase.output}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  </div>
</div>
    </>
  );
}

export default Compiler;


