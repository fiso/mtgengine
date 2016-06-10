"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieMusher extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Musher", "Coldsnap", "CSP");
  }
}

module.exports = ZombieMusher;
