"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChampionoftheFlame extends UnimplementedCard {
  constructor (game) {
    super(game, "Champion of the Flame", "Dominaria", "DOM");
  }
}

module.exports = ChampionoftheFlame;
