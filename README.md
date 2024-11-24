# Anjing's flatpak repository

## Usage

### Prerequisites

Ensure you have `flatpak` and `flatpak-builder` installed.

```sh
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo --user
flatpak install flathub org.flatpak.Builder --user -y
```

### Clone the Repository

```sh
git clone https://github.com/qvshuo/flatpak.git
```

### Install packages

Navigate into the cloned directory:

```sh
cd flatpak
```

Use the following command to install a package:

```sh
flatpak run org.flatpak.Builder --install-deps-from=flathub --force-clean --user --install build /path/to/package.yml
```

### Example

To install YesPlayMusic, run:

```sh
flatpak run org.flatpak.Builder --install-deps-from=flathub --force-clean --user --install build ./io.github.anjing.yesplaymusic/io.github.anjing.yesplaymusic.yml
```

## Screenshots

- **Excalidraw**
  ![Excalidraw](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_com.excalidraw.excalidraw.png)

- **WeChat**
  ![WeChat](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_com.tencent.wechat.png)

- **Craft Docs**
  ![Craft Docs](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_do.craft.docs.png)

- **YesPlayMusic**
  ![YesPlayMusic](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_io.github.anjing.yesplaymusic.png)

- **Image Beautifier**
  ![Image Beautifier](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_io.github.ch563.image_beautifier.png)

- **Telegram**
  ![Telegram](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_io.github.morethanwords.telegram.jpg)
  
