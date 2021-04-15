const { ipcMain } = require('electron');
import { downloadFile } from './download';
export const registerIpcMain = (window) => {
  ipcMain.handle('zoom-window', () => {
    if (window.isMaximized()) {
      window.unmaximize();
    } else {
      window.maximize();
    }
  });
  ipcMain.handle('downloadFile', (e, data) => {
    console.log('start download file', data.url)
    downloadFile(data);
  })
};
