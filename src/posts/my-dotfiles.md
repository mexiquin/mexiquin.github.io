---
title: "My Dotfiles"
date: 2022-05-02T20:36:44-07:00
author: Quinton Jasper
draft: true
categories:
  - Personal
  - Linux
tags:
  - Arch
  - dotfiles
  - customization
  - aesthetic
---

For the first time in a good while, I feel like I've found an ergonomic color scheme suitable for my programming and daily-use needs. I've chosen to use the Gruvbox-Dark color scheme across my entire environment to help save my eyes from strain and maybe even my sanity, as the theme just feels so cozy and warm, but I digress. 

For this post, I plan to outline what customizations I have done to create my preferred Linux computing environment for other people who may want to try, as well as for myself, as I'm quite forgetful.

## 1. The Distribution
As a baseline for the system, I do prefer Arch as my core system. Although I'm also really lazy, so I prefer to use Endeavour OS, as the team has done a great job of providing the Arch experience while also removing quite a few headaches from the install process. This config should still work under vanilla Arch in case you still wanted to go that route. 

I install Endeavour OS with the following preferences:
* i3 window manager
* Printing support
* Bash 
* LTS Linux kernel

## 2. The Dotfiles Repository
I have published my continually-changing dotfiles [on my GitHub](https://github.com/mexiquin/dotfiles).

The repo is designed to be used alongside GNU Stow, which will handle simlinking the configuration files to the appropriate locations within the home folder.

To get started, clone the repository with the following command:
```bash
git clone https://github.com/mexiquin/dotfiles ~/.dotfiles --recurse-submodules
```

This will put the repo right where it needs to go. To use Stow to create the symlinks, ```cd``` into the ```.dotfiles``` directory you just created, then execute

```bash
stow .
```

*It's possible that you will get an error the first time this is run.* This is because Stow doesn't want to overwrite files that already exist. For this to work, you have to delete the files that are in the way, they will be listed by Stow when the error is thrown. You can either back-up your original files first, or just delete them. Don't delete them unless you are absolutely sure you want to do this.

## 3. Other Configurations
After the dotfiles are where they need to be, there are just some other simple changes that need to be done before the configuration is complete.

