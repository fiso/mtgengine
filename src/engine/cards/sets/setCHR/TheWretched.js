"use strict";
const Constants = require ("../../../Constants");
const TheWretchedBase = require("../setME3/TheWretched");

class TheWretched extends TheWretchedBase {
  constructor (game) {
    super(game, "The Wretched", "Chronicles", "CHR");
  }
}

module.exports = TheWretched;
