#!/bin/sh
# welcome to shell script for termux startup and neovim setup
#  1 lets start with termux
# ------------------------
#  TERMUX
#------------------------

echo "TERMUX STARTUP"

# pkg update -y
# pkg upgrade

termux-setup-storage

termux-setup-repo

echo "installing packages and dependencies"
echo -e "nodejs python neovim git python2 python2-dev python3 \n perl bash nano curl openssl openssh wget clang help nmap w3m \n hydra ruby macchanger dnsutils coreut "
# package = "nodejs python neovim git python2 python2-dev python3 perl bash nano curl openssl openssh wget clang help nmap w3m hydra ruby macchanger dnsutils coreut "

# pkg install -y $package

packages=(
  "nodejs"
  "git"
  "python"
   "neovim"
    "curl"
    "openssl"
     "openssh"
     "wget"
  "openjdk-11-jdk"
  "ruby"
  "php"
  "golang"
  "rustc"
  "build-essential"
  "clang"
  "vim"
  "tmux"
  "sqlite"
  "wget"
  "curl"
  "httpie"
  "tree"
  "jq"
  "ffmpeg"
  "imagemagick"
  "neofetch"
)

for package in "${packages[@]}"; do
  pkg install -y "$package"
  echo '$package installed'
done
#  2 lets start with neovim
# ------------------------
#  NEOVIM
#------------------------

echo "NEOVIM STARTUP"
git clone --depth 1 https://github.com/wbthomason/packer.nvim ~/.local/share/nvim/site/pack/packer/start/packer.nvim
cd

foldername=".config"

if [ -d "$foldername" ]; then
    echo "moving to .config folder"
    cd .config

else
    echo "creating .config and changing directory to .config"
    mkdir $foldername && cd $foldername

fi

git clone https://github.com/derekzyl/nvim.git
