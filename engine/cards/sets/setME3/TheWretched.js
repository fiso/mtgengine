"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheWretchedBase = require("../setCHR/TheWretched.js");

class TheWretched extends TheWretchedBase {
  constructor(game) {
    super(game, "The Wretched", "Masters Edition III", "ME3");
  }
}

module.exports = TheWretched;
