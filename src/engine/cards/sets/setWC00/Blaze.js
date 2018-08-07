"use strict";
const Constants = require ("../../../Constants");
const BlazeBase = require("../setBBD/Blaze");

class Blaze extends BlazeBase {
  constructor (game) {
    super(game, "Blaze", "World Championship Decks 2000", "WC00");
  }
}

module.exports = Blaze;
