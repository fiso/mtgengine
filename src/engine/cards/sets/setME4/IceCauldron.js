"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IceCauldron extends UnimplementedCard {
  constructor (game) {
    super(game, "Ice Cauldron", "Masters Edition IV", "ME4");
  }
}

module.exports = IceCauldron;
