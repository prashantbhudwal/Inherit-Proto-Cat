# dabbleWithJs

In this repository I experiment with javascript and its features.

This is written in the style of an article that I can comeback and read later. Hence a lot of comments that guide me from one line to another. And, very very long function names.

Since I have moved to Ts from Js, all the future dabbles will live in dabbleWithTs folder of this repo.

## Typescript

The repo also includes typescript code.

- It is configured to use ES6 modules.
- to start emitting: `npm start`

# Folder Structure

## Javascript

- UnCategorized - "./VanillaJS"

- Categorized
  - Asynchronous Programming - "./AsyncJs"

## Typescript

- Source - "./dabbleWithTs"
- Emitted - "./build"

## ./index.js

- Only index.js is imported in the index.html
- All other files are imported one by one in index.js

# Appendix: Pragmatic Steps to get started with TS in VS Code

- Install npm
  - Why? ts is distributed as a npm package.
- Add package.json file with npm -init
  - This file stores details about the project and its dependencies
- Install Ts with save dev flag
  - Browser can't understand typescript directly. You need a typescript package.
  - The flag: It is only a development dependency. This info gets saved in package.json file.
- Modify package.json
  - Add to: scripts
    - "start": "tsc --watch"
  - This will help you compile tsc. Everything in the root and its subdirectories gets compiled.
- Add tsconfig file using tsc -init
  - Generates a template configuration file for ts. Think of it like a preferences menu for typescript.
- Modify tsconfig
  - CHANGE --> modules: "ES6"
    - if you are using vanilla js
  - Uncomment --> // "outDir": "./"
  - Change --> "outDir": "./EMIT_FOLDER"
    - EMIT_FOLDER: Folder where files are emitted.
- Start script
  - npm start
