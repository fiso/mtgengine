"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElementalAuguryBase = require("../setICE/ElementalAugury.js");

class ElementalAugury extends ElementalAuguryBase {
  constructor(game) {
    super(game, "Elemental Augury", "Masters Edition II", "ME2");
  }
}

module.exports = ElementalAugury;
