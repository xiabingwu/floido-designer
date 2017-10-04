const {
	Menu
} = require('electron')
const electron = require('electron')
const app = electron.app

const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const template = [
	{
		label: 'File',
		submenu: [
			{
				label: 'New',
				accelerator: 'CmdOrCtrl+N'
      },
			{
				label: 'Open...',
				accelerator: 'CmdOrCtrl+O'
      },
			{
				label: 'Open Recent',
				submenu: []
      },
			{
				type: 'separator'
      },
			{
				label: 'Close Window',
				accelerator: 'CmdOrCtrl+W'
      },
			{
				label: 'Save...',
				accelerator: 'CmdOrCtrl+S'
      },
			{
				label: 'Duplicate',
				accelerator: 'Shift+CmdOrCtrl+S'
      },
			{
				label: 'Rename...'
      },
			{
				type: 'separator'
      },
			{
				label: 'Save Template...'
      }
    ]
  },

	{
		label: 'Edit',
		submenu: [
			{
				role: 'undo',
				click: function () {
					var focusedWindow = BrowserWindow.getFocusedWindow();
					focusedWindow.webContents.send('undo');
				}
      },
			{
				role: 'redo',
				click: function () {
					var focusedWindow = BrowserWindow.getFocusedWindow();
					focusedWindow.webContents.send('redo');
				}
      },
			{
				type: 'separator'
      },
			{
				role: 'cut'
      },
			{
				role: 'copy',
				click: function () {
					var focusedWindow = BrowserWindow.getFocusedWindow();
					focusedWindow.webContents.send('copy');
				}
      },
			{
				role: 'paste',
				click: function () {
					var focusedWindow = BrowserWindow.getFocusedWindow();
					focusedWindow.webContents.send('paste');
				}
      },
			{
				role: 'pasteandmatchstyle'
      },


			{
				role: 'delete',
				label: 'Delete',
				click: function () {
					var focusedWindow = BrowserWindow.getFocusedWindow();
					focusedWindow.webContents.send('delete');
				}
      },
			{
				role: 'selectall'
      },
			{
				type: 'separator'
      },
			{
				label: 'Duplicate',
				accelerator: 'CmdOrCtrl+D'
      }
    ]
  },

	{
		label: 'Insert',
		submenu: [
			{
				label: 'Add Textfield'
      },
			{
				label: 'Add Image...'
      },
			{
				label: 'Add Video...'
      },
			{
				type: 'separator'
      },
			{
				label: 'Add Rectangle'
      },
			{
				label: 'Add Rounded Rectangle'
      },
			{
				label: 'Add Circle'
      },
			{
				label: 'Add Triangle'
      },
			{
				label: 'Add Line'
      }
    ]
  },


	{
		label: 'Typography',
		submenu: [
			{
				label: 'Bold'
      },
			{
				label: 'Italic'
      },
			{
				label: 'Underline'
      },
			{
				type: 'separator'
      },
			{
				label: 'Align Left'
      },
			{
				label: 'Align Center'
      },
			{
				label: 'Align Right'
      },
			{
				label: 'Justifyed'
      }
    ]
  },

	{
		label: 'Arrange',
		submenu: [
			{
				label: 'Bring Forward',
				accelerator: 'Alt+Shift+CmdOrCtrl+F'
      },
			{
				label: 'Bring to Front',
				accelerator: 'Shift+CmdOrCtrl+F'
      },
			{
				label: 'Bring Backward',
				accelerator: 'Alt+Shift+CmdOrCtrl+B'
      },
			{
				label: 'Bring to Back',
				accelerator: 'Shift+CmdOrCtrl+B'
      },
			{
				type: 'separator'
      },
			{
				label: 'Align',
				submenu: [
					{
						label: 'Left'
					},
					{
						label: 'Center'
					},
					{
						label: 'Right'
					},
					{
						type: 'separator'
					},
					{
						label: 'Top'
					},
					{
						label: 'Middle'
					},
					{
						label: 'Bottom'
					}
				]
      },
			{
				label: 'Distribute',
				submenu: [
					{
						label: 'Horizontal'
					},
					{
						label: 'Vertical'
					}
					]
      },
			{
				type: 'separator'
      },
			{
				label: 'Group Selected',
				accelerator: 'CmdOrCtrl+G'
      },
			{
				label: 'Ungroup Selected',
				accelerator: 'CmdOrCtrl+U'
      },
			{
				type: 'separator'
      },
			{
				label: 'Lock Selected'
      },
			{
				label: 'Make Invisible'
      }
	]
  },


	{
		label: 'Zoom Canvas',
		submenu: [
			{
				label: 'Zoom In',
				accelerator: 'CmdOrCtrl++'
      },
			{
				label: 'Zoom Out',
				accelerator: 'CmdOrCtrl+-'
      },
			{
				type: 'separator'
      },
			{
				label: '25%'
      },
			{
				label: '50%'
      },
			{
				label: '75%'
      },
			{
				label: '100%'
      },
			{
				label: '125%'
      },
			{
				label: '150%'
      },
			{
				label: '175%'
      },
			{
				label: '200%'
      },
			{
				type: 'separator'
      },
			{
				label: 'Actual Size',
				accelerator: 'CmdOrCtrl+0'
      },
			{
				label: 'Fit Window',
				accelerator: 'Alt+CmdOrCtrl+0'
      }
    ]
  },


	{
		label: 'View',
		submenu: [
			{
				label: 'Reload',
				accelerator: 'CmdOrCtrl+R',
				click(item, focusedWindow) {
					if (focusedWindow) focusedWindow.reload()
				}
      },
			{
				label: 'Toggle Developer Tools',
				accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
				click(item, focusedWindow) {
					if (focusedWindow) focusedWindow.webContents.toggleDevTools()
				}
      },
			{
				type: 'separator'
      },
			{
				role: 'resetzoom'
      },
			{
				role: 'zoomin'
      },
			{
				role: 'zoomout'
      },
			{
				type: 'separator'
      },
			{
				role: 'togglefullscreen'
      }
    ]
  },
	{
		role: 'window',
		submenu: [
			{
				role: 'minimize'
      },
			{
				role: 'close'
      }
    ]
  },
	{
		role: 'help',
		submenu: [
			{
				label: 'My Learn More',
				click() {
					let win = new BrowserWindow({
						frame: false,
						width: 800,
						height: 600,
						minWidth: 800,
						minHeight: 600,
						backgroundColor: '#312450',
						parent: mainWindow
					})
					win.loadURL(url.format({
						pathname: path.join(__dirname, 'WelcomeWindow/index.html'),
						protocol: 'file:',
						slashes: true
					}))
				}
      }
    ]
  }
]

if (process.platform === 'darwin') {
	const name = app.getName()
	template.unshift({
		label: name,
		submenu: [
			{
				//                    role: 'about',
				label: 'About Floido Designer',
				click() {
					let win = new BrowserWindow({
						title: 'About Floido Designer',
						width: 600,
						height: 400,
						backgroundColor: '#6b0098',
						alwaysOnTop: true,
						minimizable: false,
						fullscreen: false,
						resizable: false,
						titleBarStyle: 'hidden',
						icon: '../icons/mac/icon.icns'
					})
					win.loadURL(url.format({
						pathname: path.join(__dirname, '../windows/index.html'),
						protocol: 'file:',
						slashes: true
					}))
				}

      },
			{
				type: 'separator'
      },
			{
				label: 'Preferences',
				accelerator: 'CmdOrCtrl+,'
      },
			{
				type: 'separator'
      },

			{
				label: 'Check for updates...'
	},

			{
				type: 'separator'
      },
			{
				role: 'services',
				submenu: []
      },
			{
				type: 'separator'
      },
			{
				role: 'hide'
      },
			{
				role: 'hideothers'
      },
			{
				role: 'unhide'
      },
			{
				type: 'separator'
      },
			{
				role: 'quit'
      }
    ]
	})

	// Edit menu.
	template[1].submenu.push({
			type: 'separator'
		}, {
			label: 'Speech',
			submenu: [
				{
					role: 'startspeaking'
        },
				{
					role: 'stopspeaking'
        }
      ]
		})
		// Window menu.
	template[7].submenu = [
		{
			label: 'Close',
			accelerator: 'CmdOrCtrl+W',
			role: 'close'
    },
		{
			label: 'Minimize',
			accelerator: 'CmdOrCtrl+M',
			role: 'minimize'
    },
		{
			label: 'Zoom',
			role: 'zoom'
    },
		{
			type: 'separator'
    },
		{
			label: 'Open origninal index.html',
			click() {
				const modalPath = path.join('floido.jpg')
				let win = new BrowserWindow({
					width: 400,
					height: 320
				})
				win.on('close', function () {
					win = null
				})
				win.loadURL(modalPath)
				win.show()
			}
    },
		{
			label: 'Welcome',
			click() {
				let win = new BrowserWindow({
					width: 800,
					height: 600,
					backgroundColor: '#312450'
				})
				win.loadURL(url.format({
					pathname: path.join(__dirname, '../windows/settings.html'),
					protocol: 'file:',
					slashes: true
				}))
			}
    },
		{
			type: 'separator'
    },
		{
			label: 'Bring All to Front',
			role: 'front'
    }
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)