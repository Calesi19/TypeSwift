import React, { useState } from 'react';
import { ToggleSwitch } from 'flowbite-react';

const TogglePythonScript: React.FC = () => {


  const [isScriptRunning, setIsScriptRunning] = useState<boolean>(false);
  const [checked, setSwitch1] = useState(true)

  const handleToggle = () => {
    window.electron.ipcRenderer.sendMessage('toggle-python-script', isScriptRunning);
    setIsScriptRunning(!isScriptRunning);
    setSwitch1(!checked)
    console.log('toggle')
  };

  return (
    <div>
      <ToggleSwitch checked={checked} onChange={handleToggle} />
      {isScriptRunning ? 'Stop Python Script' : 'Start Python Script'}
    </div>
  );
};

export default TogglePythonScript;



