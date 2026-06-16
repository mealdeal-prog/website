# MealDeal Website - Local Version

This folder contains a fully functional local copy of the MealDeal website.

## How the Contact Form Works

The contact form on this site is pre-configured to work **without a backend server**.

1.  **Service**: It uses [Web3Forms](https://web3forms.com/), a service that allows static sites to receive form submissions.
2.  **Logic**: When a user fills out the "Contact" form and clicks submit, the data is sent directly to the Web3Forms API.
3.  **Delivery**: Web3Forms then automatically forwards the message to the registered email: **getmealdeal@gmail.com**.
4.  **Local Support**: The form works perfectly while running the site locally (e.g., via `localhost:8000`), provided you have an internet connection to reach the Web3Forms API.

## Running Locally

To avoid CORS security restrictions, run a local server in this directory:

```bash
python3 -m http.server 8000
```
Then visit: **http://localhost:8000**
