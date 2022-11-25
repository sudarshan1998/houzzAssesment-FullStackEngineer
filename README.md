# Houzz FullStack Engineer Assesment

## Introduction

We need to create a simple beer list which should have 2 tabs, one for the beers fetched from the API("All beers") and another for the custom beers added by the user.

API: ```https://punkapi.com/documentation/v2```

## Installation

This is react application. Therefore, we need to have Node.js first. To setup the link follow:
Link: https://nodejs.org/en/download/

To setup the react, run the command
```npx create-react-app my-app```

### Run the project

Go inside the ```my-app/src``` and run the the command ```npm start```

Note: Dont forget to ```npm install``` before ```npm start``` to install all the dependencies

## Project structure

```bash
📦my-app
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂addNewBeerModal
 ┃ ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂allBeers
 ┃ ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂beerItem
 ┃ ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┣ 📂homePage
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┃ ┗ 📂myBeers
 ┃ ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂images
 ┃ ┃ ┗ 📜houzz.png
 ┃ ┗ 📜index.js
 ┣ 📜.gitignore
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
 ```