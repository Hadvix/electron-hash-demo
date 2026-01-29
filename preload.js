const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  generateHash: () => ipcRenderer.invoke('hash:generate'),
});
