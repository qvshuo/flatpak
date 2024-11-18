# Anjing's flatpak repository

## Usage

### Prerequisites

Ensure you have `flatpak` and `flatpak-builder` installed.

```sh
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo --user
flatpak install flathub com.github.flatpak.Builder --user
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
flatpak-builder --install-deps-from=flathub --force-clean --user --install build /path/to/package.yml
```

### Example

To install YesPlayMusic, run:

```sh
cd flatpak
flatpak-builder --install-deps-from=flathub --force-clean --user --install build ./io.github.anjing.yesplaymusic/io.github.anjing.yesplaymusic.yml
```
