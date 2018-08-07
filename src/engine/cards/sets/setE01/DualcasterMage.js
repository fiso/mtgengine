"use strict";
const Constants = require ("../../../Constants");
const DualcasterMageBase = require("../setCM2/DualcasterMage");

class DualcasterMage extends DualcasterMageBase {
  constructor (game) {
    super(game, "Dualcaster Mage", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = DualcasterMage;
