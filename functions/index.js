const functions = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51NCg0nSDXZ89VmkVPF8HnkqVjtOkDsTnqDzpt80wyEdbOo1BNDn5vXRSkkUGlTyNgGDkeuvufQOVxfIgaouGM1us00ZySqVEwD",
);

// - App config
const app = express();
// // - Middlewares
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved for the amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",

  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - listen command
exports.api = functions.https.onRequest(app);
