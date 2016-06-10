"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gix extends UnimplementedCard {
  constructor (game) {
    super(game, "Gix", "Vanguard", "VAN");
  }
}

module.exports = Gix;
