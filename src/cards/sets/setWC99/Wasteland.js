"use strict";
const Constants = require ("../../../Constants");
const WastelandBase = require("../setEMA/Wasteland");

class Wasteland extends WastelandBase {
  constructor (game) {
    super(game, "Wasteland", "World Championship Decks 1999", "WC99");
  }
}

module.exports = Wasteland;
