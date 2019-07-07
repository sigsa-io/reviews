# Sigsa - Reviews service

<table>
<tr>
<td>
Sigsa is a web app that simulates an OpenTable restaurant page experience. The Reviews service is responsible for delivering content+data for the reviews module on any Sigsa restaurant page.

Reviews service created with Node.js, React, and MySQL.
</td>
</tr>
</table>

# Table of Contents
1. [Demo](#demo)
1. [Features](#features)
1. [Technologies](#technologies)
1. [Getting Started](#Getting-Started)
1. [API Endpoints](#API-Endpoints)
1. [Team](#team)
1. [Related Projects](#related-projects)

# Demo
> Demo creation in progress
<!-- Here is a working live demo: -->

# Features

### In progress
- Display reviews for a specific restaurant
- Display average rating data for a specific restaurant
- Sort reviews based on date
- Sort reviews based on overall ratings

### Future plans
- Filter reviews based on top tags
- Mark a review as helpful and keep track of helpful reviews
- Flag a review for innapropriate content

# Technologies
Project is created with:
- Node.js^8.16
- React.js^16.8.6
- JavaScript
- HTML5
- CSS
- MySQL^2.17.1
- Express^4.17.1

# Getting Started

To run this project, install it locally following the instructions below.

### Prerequisites:

- Navigate to https://github.com/sigsa-io/reviews and fork the repository to your personal Github account.
- Open a new terminal and clone the forked repository

```
git clone https://github.com/YOUR-GIT-HANDLE/reviews
```
- Navigate to the newly created directory
```
cd reviews/
```

### Installing Dependencies:

From within the root directory:

```sh
npm install
```
An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.16.0

### Startup:

#### Bundle files using Webpack
- In a terminal, navigate to project's root directory
- Run `npm run react-dev`
- Keep this terminal window open so Webpack can automatically bundle project files.

#### Start server
- In a new terminal, navigate to project's root directory
- Run `npm run start-server`
- Keep this terminal window open to keep server running

#### Start database
- Start a MySql database server
- From this repository's local root directory, create a `/database/secrets.js` file with the following content
  ```sh
  module.exports.login = { 
    user: 'Your_MySQL_Username',
    password: 'Your_MySQL_Password'
  }; 

  // Replace strings with your own MySQL username and password 
  // Save this file
  ``` 

- In a terminal, navigate to project's root directory
- Run `npm run start-db` to migrate schema to database  

#### Other scripts
Run scripts by navigating to this project's root directory from the terminal and entering `npm run <script name>`.

- `pretest`: find problematic patterns or code that doesn't adhere to style guidelines
- `start-client`: test client code separately from server code using this development server with live reload capability
- `seed`: initialize database with mock data
- `test`: run Jest to test JS and React code

## View Sigsa's Reviews module (development mode):
In a browser window, navigate to http://localhost:3004/.

# API Endpoints

#### `GET /restaurants/:restaurant_id/reviews`

**Input**: `restaurant_id` which will be used to fetch a particular restaurant’s reviews

**Output**: JSON with all reviews for that particular restaurant

```sh
[
  {
    "restaurant_id": <number>,
    "review_id": <number>,
    "user_initials": <string>,
    "user_name": <string>,
    "user_location": <string>,
    "user_review_count": <number>,
    "review_dine_date": <datetime>,
    "rating_overall": <number>,
    "rating_food": <number>,
    "rating_service": <number>,
    "rating_ambience": <number>,
    "review_helpful_count": <number>,
    "review_body": <string>
  },
  ...
]
```

<!-- #### `PATCH /restaurants/:restaurant_id/reviews/:review_id/helpful`

**Input**: `restaurant_id` and `review_id` which will be used to update a particular restaurant’s reviews
 -->

# Inspiration
Front-end design inspired by [Open Table](https://www.opentable.com/)

# Team
[![Priyanka Piali Pramanik](https://avatars1.githubusercontent.com/u/50081087?s=400&v=4)](https://github.com/primanbo)  | [![sigsa-io.com](../img/orange/favicon-196x196.png)](https://github.com/sigsa-io)
---|---
[Priyanka Piali Pramanik ](https://github.com/primanbo) |[Sigsa](https://github.com/sigsa-io)
# License
Galvanize © [Priyanka Piali Pramanik](https://github.com/primanbo)

# Related Projects

  - https://github.com/sigsa-io/gallery
  - https://github.com/sigsa-io/summary-menu
  - https://github.com/sigsa-io/reservations
