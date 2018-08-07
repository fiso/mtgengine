"use strict";
const Constants = require ("../../../Constants");
const ElementalAuguryBase = require("../setME2/ElementalAugury");

class ElementalAugury extends ElementalAuguryBase {
  constructor (game) {
    super(game, "Elemental Augury", "Ice Age", "ICE");
  }
}

module.exports = ElementalAugury;
