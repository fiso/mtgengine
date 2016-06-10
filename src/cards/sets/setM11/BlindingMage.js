"use strict";
const Constants = require ("../../../Constants");
const BlindingMageBase = require("../setM10/BlindingMage");

class BlindingMage extends BlindingMageBase {
  constructor (game) {
    super(game, "Blinding Mage", "Magic 2011", "M11");
  }
}

module.exports = BlindingMage;
