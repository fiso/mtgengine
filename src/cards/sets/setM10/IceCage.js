"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IceCage extends UnimplementedCard {
  constructor (game) {
    super(game, "Ice Cage", "Magic 2010", "M10");
  }
}

module.exports = IceCage;
