"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathCultist extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Cultist", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DeathCultist;
