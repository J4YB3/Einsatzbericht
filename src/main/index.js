import {app, BrowserWindow} from 'electron'

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:3000')
    } else {
        mainWindow.loadFile('./dist/index.html')
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});