## Installing on Windows

Go over the `nvm_windows.pdf` document extracted from https://dev.to/skaytech/how-to-install-node-version-manager-nvm-for-windows-10-4nbi

```
nvm list available
nvm install 20.18.1
nvm use 20.18.1
```

## Installing on macOS

- Download `nvm` from https://github.com/nvm-sh/nvm (easiest way is to download as a zip file)
- Unzip the folder, move it to your home directory and rename it to `.nvm`

```
cd ~
mv nvm-master .nvm
```

- Include the `nvm` utility in the start-up script:

```
# To include in ~/.zshrc or ~/.zprofile
# export PATH=~/.nvm/versions/node//bin:$PATH
export NVM_DIR="$HOME/.nvm"

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" --no-use # this loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

- Open up a new shell and run the following commands :

```
nvm ls-remote
nvm install 20.18.1
nvm use 20.18.1
```
