"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrandMelee extends UnimplementedCard {
  constructor (game) {
    super(game, "Grand Melee", "Onslaught", "ONS");
  }
}

module.exports = GrandMelee;
