const { app, BrowserWindow, shell } = require("electron");
const path = require("path");

function createWindow() {
  // 创建主窗口
  const win = new BrowserWindow({
    width: 1350,
    height: 850,
    title: "YesPlayMusic", // 设置窗口标题
    webPreferences: {
      nodeIntegration: false, // 禁用 Node 集成以增强安全性
      contextIsolation: true, // 启用上下文隔离
    },
  });

  win.loadURL("https://yes-play-music-qvshuos-projects.vercel.app/");

  win.setMenuBarVisibility(false); // 隐藏菜单栏

  // 拦截窗口打开事件，用默认浏览器打开
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (!url.includes("yes-play-music-qvshuos-projects.vercel.app")) {
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
app.whenReady().then(createWindow);

// 所有窗口关闭后退出应用
app.on("window-all-closed", () => {
  app.quit();
});
