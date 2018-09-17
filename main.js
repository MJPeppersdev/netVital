const {app, BrowserWindow, globalShortcut} = require('electron');
function createWindow () {
    win = new BrowserWindow({
        icon: 'mjplogo.png',
        width: 800,
        height: 500,
        center: true,
        resizable: false,
    })
    win.setMenu(null);
    win.loadFile('index.html');

    globalShortcut.register('CommandOrControl+Shift+I', () => {
        win.webContents.openDevTools()
    });

    globalShortcut.register('F5', () => {
        win.reload();
    });
}

app.on('ready', createWindow);
