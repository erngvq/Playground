## WebStorm Settings Configuration

- Settings -> Version Control -> Commit -> UNCHECK "Use non-modal commit interface"
- Settings -> Editor -> General -> Appearance -> UNCHECK "Show hard wrap and visual guides ..."
- Settings -> Editor -> General -> On Save -> CHECK "Remove trailing spaces on: All lines"
- Settings -> Editor -> General -> On Save -> UNCHECK "Keep trailing spaces on caret line"
- Settings -> Editor -> General -> On Save -> CHECK "Remove trailing blank lines at the end of saved files"
- Settings -> Editor -> General -> On Save -> CHECK "Ensure every saved file ends with a line break"
- Settings -> Editor -> General -> Code Folding -> Unselect all options under "General" section
- Settings -> Editor -> Inlay Hints -> UNCHECK "Code vision"
- Settings -> Editor -> Code Style -> TypeScript -> Punctuation Tab -> "Use SINGLE quotes"

## Updating `npm` & Angular Versions (Node Version = 20.18.1)

- npm uninstall -g @angular/cli
- npm install -g npm@11.0.0
- npm install -g @angular/cli@17.0.0

## Adding Bootstrap

1) Install Bootstrap via terminal: `npm install bootstrap bootstrap-icons`
2) Update the `angular.json` file under build options:
   ```
    "styles": [
        "node_modules/bootstrap/scss/bootstrap.scss",
        "node_modules/bootstrap-icons/font/bootstrap-icons.css",
        "src/styles.css"
    ],
    "scripts": [
        "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",   
    ]
    ```

## Project Renaming

1) Modify project name in angular.json file (and all other occurrences using global replacement)
2) Rename project folder name
3) Delete `node_modules` folder from the project directory
4) Run `npm install` command
5) Run `ng serve` command to make sure everything works as expected

## Project Tracking

- ng version
- ng new introduction
- ng new employee-registration
