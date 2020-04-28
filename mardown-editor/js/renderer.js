var editor = new SimpleMDE({
    element: document.getElementById('editor')
});



const { ipcRenderer, BrowserWindow } = require('electron');

ipcRenderer.on('editor-event', (event, args) => {
    console.log(args);
    //send message back to main process
    event.sender.send('editor-reply', `Received ${arg}`);
});


//Test
ipcRenderer.send('editor-reply', 'Page Loaded');


// const window  = BrowserWindow.getFocusedWindow();
// window.webContents.send('<channel>', args);