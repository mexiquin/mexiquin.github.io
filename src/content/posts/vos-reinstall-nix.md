---
title: "Reinstalling Nix in VanillaOS"
date: 2023-06-05T22:44:43-07:00
author: Quinton Jasper
draft: false
categories:
  - guide
  - linux
tags:
  - vanillaos
  - nix
  - container
---

Hi there! I'll just jump right in to what this guide is about. I'm currently running VanillaOS as my primary operating system on my Linux devices, and I really like its _apx_ file manager. One thing I find most interesting is its compatibility with the Nix package manager, which is really great for installing packages that need closer access to your host system than it would normally get instide of a standard apx Distrobox container. 

I'm not very experienced with the Nix package manager just yet, so when I first installed it, I got scared and deleted it, along with the files it created in my home directory. Now that I'm looking to give it another chance, I wanted to reinstall it again, but I ran into some little issues here and there. So, I'll outline the steps I took to reinstall.

Before you reinstall using the same `apx init --nix` command, there are a couple of things you have to do first

1. Make sure you have deleted the `~/.nix` folder.

If this folder is present, apx will essentially skip the install process of nix. Running `rm -rf ~/.nix` will allow apx to recognize that an install is necessary.

2. Make sure you have unmounted the `/nix` directory

This one confused me for a bit. When running the apx setup for nix, I would get errors like:

`mkdir: cannot create directory '/nix/store': No such file or directory`
`mkdir: cannot create directory '/nix/var': No such file or directory`

I later found this was because the top-level `/nix` directory was mounted. So a simple `sudo umount /nix` was enough to fix this issue.

At this point, you should be good to go to run `apx init --nix` and this should install Nix just like the first time!

Hope this helps :) 
