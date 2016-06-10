"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IceCauldron extends UnimplementedCard {
  constructor (game) {
    super(game, "Ice Cauldron", "Ice Age", "ICE");
  }
}

module.exports = IceCauldron;
