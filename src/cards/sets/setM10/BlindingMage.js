"use strict";
const Constants = require ("../../../Constants");
const BlindingMageBase = require("../setIMA/BlindingMage");

class BlindingMage extends BlindingMageBase {
  constructor (game) {
    super(game, "Blinding Mage", "Magic 2010", "M10");
  }
}

module.exports = BlindingMage;
