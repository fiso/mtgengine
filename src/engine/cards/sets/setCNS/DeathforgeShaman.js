"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathforgeShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathforge Shaman", "Conspiracy", "CNS");
  }
}

module.exports = DeathforgeShaman;
