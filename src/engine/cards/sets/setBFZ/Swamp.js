"use strict";
const Constants = require ("../../../Constants");
const SwampBase = require("../setC18/Swamp");

class Swamp extends SwampBase {
  constructor (game) {
    super(game, "Swamp", "Battle for Zendikar", "BFZ");
  }
}

module.exports = Swamp;
