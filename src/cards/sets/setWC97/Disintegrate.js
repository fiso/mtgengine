"use strict";
const Constants = require ("../../../Constants");
const DisintegrateBase = require("../setTSB/Disintegrate");

class Disintegrate extends DisintegrateBase {
  constructor (game) {
    super(game, "Disintegrate", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Disintegrate;
