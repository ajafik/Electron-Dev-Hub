const { app, Menu, shell, ipcMain, BrowserWindow } = require('electron');
require('dotenv').config();
const template = [
    {
        role: 'help',
        submenu: [
            {
                label: 'About Editor Component',
                click() {
                    shell.openExternal('https://simplemde.com/');
                },
            },
            {
                type: 'separator',
            },
            {
                label: 'Exit',
                role: 'close'
            }
        ]
    },
    {
        label:'Format',
        submenu:[
            {
                label: 'Toggle Bold',
                click(){
                    const window  = BrowserWindow.getFocusedWindow();
                    window.webContents.send('editor-event', 'toggle-bold');
                }
            }
        ]

    },

];


// Show this Menu only in DEBUG
if (process.env.DEBUG === true) {
    template.push(
        {
            label: 'Debugging',
            submenu: [
                {
                    label: 'Dev Tools',
                    role: 'toggleDevTools'
                },
                {
                    role: 'reload',
                    accelerator: 'Alt+R'
                }
            ]
        }
    );
}


// Shows online on macOS
if (process.platform === 'darwin') {
    template.unshift({
        label: app.getName(),
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    })
}

const menu = Menu.buildFromTemplate(template);


// Events 
ipcMain.on('editor-reply', (event, arg) =>{
    console.log(`Received reply from web page: ${arg}`);
})

module.exports = menu;