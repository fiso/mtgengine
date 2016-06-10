"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronMyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Iron Myr", "Mirrodin", "MRD");
  }
}

module.exports = IronMyr;
