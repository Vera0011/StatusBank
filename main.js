'use strict'

const { app, BrowserWindow } = require('electron');

let win;
let loader;

// app.disableHardwareAcceleration();

const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        minWidth: 800,
        minHeight: 600,
        trafficLightPosition: 3,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            enableRemoteModule: true,
        },
        frame: true,
        // icon: `${__dirname}/app-icon.ico`
    });

    win.setMenu(null);

    // CHROME DEV TOOLS (TESTING)
    // win.webContents.openDevTools();

    win.loadFile(`${__dirname}/src/main/index.html`)

    win.center();

    win.webContents.on("did-finish-load", () => {
        win.show();
    });
}

// WHEN APP IS READY, OPEN A WINDOW
app.whenReady().then(() => {
    createWindow();
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// WHEN ALL WINDOWS ARE CLOSED
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});