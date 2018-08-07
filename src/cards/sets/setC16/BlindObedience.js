"use strict";
const Constants = require ("../../../Constants");
const BlindObedienceBase = require("../setC17/BlindObedience");

class BlindObedience extends BlindObedienceBase {
  constructor (game) {
    super(game, "Blind Obedience", "Commander 2016", "C16");
  }
}

module.exports = BlindObedience;
