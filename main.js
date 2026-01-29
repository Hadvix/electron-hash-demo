const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const crypto = require('crypto');

function createWindow() {
  const win = new BrowserWindow({
    width: 320,
    height: 240,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  ipcMain.handle('hash:generate', () => {
    // 16 bytes -> 32 hex znaků
    return crypto.randomBytes(16).toString('hex');
  });

  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
