const functions = require('firebase-functions');
const firebaseAdmin = require('firebase-admin');
const app = require('./app');
firebaseAdmin.initializeApp(functions.config().firebase);

exports.api = functions.https.onRequest(app);
