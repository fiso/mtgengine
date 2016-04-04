"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RotlungReanimator extends UnimplementedCard {
  constructor(game) {
    super(game, "Rotlung Reanimator", "Onslaught", "ONS");
  }
}

module.exports = RotlungReanimator;
