"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathlessAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathless Angel", "Rise of the Eldrazi Promos", "PROE");
  }
}

module.exports = DeathlessAngel;
