const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const fs = require('fs')

let mainWindow

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    show: false,
    webPreferences: { webSecurity: false, nodeIntegration: true, contextIsolation: false }
  })
  // and load the index.html of the app.
  console.log(__dirname)
  mainWindow.maximize()
  mainWindow.show()
  mainWindow.setFullScreen(true)
  mainWindow.setSimpleFullScreen(true)
  mainWindow.loadFile(path.join(__dirname, '../build/index.html'))
  mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)
