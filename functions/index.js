const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    `sk_test_51NBBD6Ea6jz055UzXZwGq6ogsmsmMT3cxHYmoe9VjpRnneTX959p
    fRDozV7DI91kHUHAtvjsN840zIHbbhFbwfkr009Gbv81B3`,
);

// App Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("Hello Dumzan!"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Commands
exports.api = functions.https.onRequest(app);
