const {
  app,
  BrowserWindow,
  shell,
  Notification,
  ipcMain,
} = require("electron");
const path = require("path");

function createWindow() {
  // 创建主窗口
  const win = new BrowserWindow({
    width: 1275,
    height: 825,
    title: "Telegram", // 设置窗口标题
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      spellcheck: false, // 禁用拼写检查
      devTools: false, // 禁用开发者工具
    },
  });

  win.loadURL("https://web.telegram.org/k/");

  win.setMenuBarVisibility(false); // 隐藏菜单栏

  // 拦截窗口打开事件，用默认浏览器打开
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.includes("web.telegram.org")) {
      shell.openExternal(url);
      return { action: "deny" };
    }
    return { action: "allow" };
  });

  // 确保标题不会被网页内容改变
  win.on("page-title-updated", (event) => {
    event.preventDefault(); // 阻止页面更改标题
  });
}

// 应用准备就绪时创建窗口
app.whenReady().then(() => {
  createWindow();

  // 处理通知 IPC
  ipcMain.on("notify", (event, title, body) => {
    new Notification(title, { body }).show();
  });
});

// 所有窗口关闭后退出应用
app.on("window-all-closed", () => {
  app.quit();
});
