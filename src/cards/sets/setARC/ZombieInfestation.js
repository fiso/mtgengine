"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieInfestation extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Infestation", "Archenemy", "ARC");
  }
}

module.exports = ZombieInfestation;
