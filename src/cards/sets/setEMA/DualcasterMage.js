"use strict";
const Constants = require ("../../../Constants");
const DualcasterMageBase = require("../setC14/DualcasterMage");

class DualcasterMage extends DualcasterMageBase {
  constructor (game) {
    super(game, "Dualcaster Mage", "Eternal Masters", "EMA");
  }
}

module.exports = DualcasterMage;
