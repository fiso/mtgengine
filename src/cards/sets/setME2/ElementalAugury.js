"use strict";
const Constants = require ("../../../Constants");
const ElementalAuguryBase = require("../setICE/ElementalAugury");

class ElementalAugury extends ElementalAuguryBase {
  constructor (game) {
    super(game, "Elemental Augury", "Masters Edition II", "ME2");
  }
}

module.exports = ElementalAugury;
