"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElementalAugury extends Card {
  constructor(game) {
    super(game, "Elemental Augury", "Ice Age", "ICE");
  }
}

module.exports = ElementalAugury;
