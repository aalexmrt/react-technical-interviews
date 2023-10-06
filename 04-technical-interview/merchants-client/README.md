# Front-End Interview

We want to present our users with a list of merchants so that they can explore current and future portfolio of brand partners. We have provided an [Express.js](https://expressjs.com/) server in the file `server.js` with a single defined api endpoint (`/api/merchants`)
that will return a json object representing a list of merchant data (`src/mockData/merchantData.json`).

We would like you to consume this API and build a front-end interface for a merchant list that our users can interact with and filter based on different parameters. Please refer to the following
[Figma mock](https://www.figma.com/file/2Z1vviiNqvMJPmY70QY6Wr/Front-End-Take-Home?type=design&node-id=0%3A1&mode=design&t=**Y44XfQLStDiOIGgh**-1) for a basic design.

Please use React to solve this coding challenge.

## Basic requirements

- Consume the provided API and render merchant cards based on mocks.
  - We'd like you to generally follow the mocks, but code cleanliness and ease of extensibility is more important than getting the design pixel perfect!
  - Make sure that you ignore any duplicate merchants that are returned. If a merchant has a "live" status, you should also ignore stale data for that merchant.
- Clicking on merchant cards should redirect you to the merchant's URL

## Getting Started

First, install dependencies

```bash
cd server
yarn
```

Then, run the development server:

```bash
yarn start
```

The server should now be running; keep it open in the background to receive api requests.

You can now navigate back to the root folder and initialize your application into another directory.


## TO DO

- [X] Represent a list of merchants provided from the json result of the apiResponse.
- [X] Add minimum styles to display the needed info
- [X] Filter duplicate merchants, if duplicates are found show the one with "live" status
- [X] Fetch data from the API
- [X] Move remove duplicate to services
- [X] Add filters users
- [ ] Add the URL to the figures
- [ ] Add some tests
- [X] Improve styles
- [X] Deploy the server and client 