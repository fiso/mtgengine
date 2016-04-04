"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheWretchedBase = require("../setCHR/TheWretched.js");

class TheWretched extends TheWretchedBase {
  constructor(game) {
    super(game, "The Wretched", "Fifth Edition", "5ED");
  }
}

module.exports = TheWretched;
