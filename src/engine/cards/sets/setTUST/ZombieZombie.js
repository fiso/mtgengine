"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie // Zombie", "Unstable Tokens", "TUST");
  }
}

module.exports = ZombieZombie;
