const { app, Menu, shell } = require('electron');

const template = [
    {
        role: 'help',
        submenu: [
            {
                label: 'About Editor Component',
                click() {
                    shell.openExternal('https://simplemde.com/');
                }
            }
        ]
    },
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
            },
            {
                type: 'separator',
            },
            {
                label: 'Exit',
                role: 'close'
            }
        ]
    }

];

// Shows online on macOS
if(process.platform  === 'darwin'){
    template.unshift({
        label: app.getName(),
        submenu: [
            {role: 'about'},
            {type: 'separator'},
            {role: 'quit'}
        ]
    })
}

const menu = Menu.buildFromTemplate(template);

module.exports = menu;