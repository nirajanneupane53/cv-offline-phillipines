import React from 'react';
import { FiX } from 'react-icons/fi';

function Close() {
  const handleCloseWindow = () => {
    const sentData = {
      event: 'close',
    };
    window.electron.ipcRenderer.sendMessage('Screen-data', sentData);
  };
  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={() => handleCloseWindow()}>
      <FiX style={{ color: 'red' }} />
    </button>
  );
}

export default Close;
