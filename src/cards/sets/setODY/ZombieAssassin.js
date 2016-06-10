"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Assassin", "Odyssey", "ODY");
  }
}

module.exports = ZombieAssassin;
