"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElementalAugury extends UnimplementedCard {
  constructor (game) {
    super(game, "Elemental Augury", "Ice Age", "ICE");
  }
}

module.exports = ElementalAugury;
