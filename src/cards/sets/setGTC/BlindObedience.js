"use strict";
const Constants = require ("../../../Constants");
const BlindObedienceBase = require("../setC17/BlindObedience");

class BlindObedience extends BlindObedienceBase {
  constructor (game) {
    super(game, "Blind Obedience", "Gatecrash", "GTC");
  }
}

module.exports = BlindObedience;
