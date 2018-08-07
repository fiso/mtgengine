"use strict";
const Constants = require ("../../../Constants");
const DisruptBase = require("../setWC02/Disrupt");

class Disrupt extends DisruptBase {
  constructor (game) {
    super(game, "Disrupt", "World Championship Decks 1997", "WC97");
  }
}

module.exports = Disrupt;
