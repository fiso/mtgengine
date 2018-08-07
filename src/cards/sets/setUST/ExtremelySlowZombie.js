"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExtremelySlowZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Extremely Slow Zombie", "Unstable", "UST");
  }
}

module.exports = ExtremelySlowZombie;
