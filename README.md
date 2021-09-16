# Tech-Blog Blueprint

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This is an MVC Blog site requiring log-in, where Blog-Post data can be stored and commented on. The Site uses Sessions to ensure the user is logged in while they can maintain their own content while commenting on other Posts. 

The program utilises the Bulma CSS framework to create a clean, minimal site that is easy to navigate. For this project we have linked it to a ‘Tech-Blog’ live Heroku site (see deployment below); however this could be cloned and restyled to any form of Blog site.

## Deployed Link and Screenshots

## Table of Contents 
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Issues](#issues)
- [Questions](#questions)
- [License](#license-and-copyright)

## Technologies

- Express
- Express-Handlebars
- Express-Session
- MySQL2
- Sequelize
- Node.js
- dot.env
- bcrypt
- HTML
- JavaScript
- Bulma CSS Framework

## Installation

User must run npm install or yarn to ensure all packages are successfully added to the application. In addition, they will need to modify the `.env.EXAMPLE` file to `.env` while also updating the password and username to their own.

## Usage

User will need to create initial profile to access the site. We also recommend seeding the content if working on the code from a LC.

## Issues

For unknown reasons the session appears to convert the user to a ‘logged-out’ status when viewing more info on a post, however comments can successfully still be applied and reviewed (with the user’s id still associated with newly added comment).

We are working to resolve this issue.

## Questions

If you have any questions, please reach out.

- [https://github.com/Dinimar-Fishboi](https://github.com/Dinimar-Fishboi)
- [dev.fish.studio@protonmail.com](#dev.fish.studio@protonmail.com)

## License and Copyright

 © Dinimar Fish, 2021

Licensed under the [MIT License](LICENSE).
