"use strict";
const Constants = require ("../../../Constants");
const WildfireBase = require("../setMM2/Wildfire");

class Wildfire extends WildfireBase {
  constructor (game) {
    super(game, "Wildfire", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Wildfire;
