"use strict";
const Constants = require ("../../../Constants");
const TheWretchedBase = require("../setCHR/TheWretched");

class TheWretched extends TheWretchedBase {
  constructor (game) {
    super(game, "The Wretched", "Legends", "LEG");
  }
}

module.exports = TheWretched;
