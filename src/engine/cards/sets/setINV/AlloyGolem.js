"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlloyGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Alloy Golem", "Invasion", "INV");
  }
}

module.exports = AlloyGolem;
