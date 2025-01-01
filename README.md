# Anjing's flatpak repository

## Usage

### Prerequisites

Ensure you have `flatpak` and `flatpak-builder` installed.

```sh
flatpak --user remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak --user install flathub org.flatpak.Builder -y
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
flatpak --user run org.flatpak.Builder --repo=local --install-deps-from=flathub --force-clean --install build /path/to/package.yml
```

### Example

To install WeChat, run:

```sh
flatpak --user run org.flatpak.Builder --repo=local --install-deps-from=flathub --force-clean --install build ./com.tencent.wechat/com.tencent.wechat.yml
```

## Screenshots

**Excalidraw:** Virtual whiteboard for sketching hand-drawn like diagrams.
![Excalidraw](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_com.excalidraw.excalidraw.png)

**WeChat:** Free messaging and calling app.
![WeChat](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_com.tencent.wechat.png)

**Craft:** The Future of Documents.
![Craft Docs](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_do.craft.docs.png)

**YesPlayMusic:** High-aesthetic third-party NetEase Cloud Music.
![YesPlayMusic](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_io.github.anjing.yesplaymusic.png)

**Image Beautifier:** Screenshot enhancement tool.
![Image Beautifier](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_io.github.ch563.image_beautifier.png)

**Telegram:** Telegram Web K, GPL v3.
![Telegram](https://raw.githubusercontent.com/qvshuo/flatpak/refs/heads/main/screenshots/screenshots_io.github.morethanwords.telegram.png)
  
