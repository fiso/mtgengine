"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieGoliath extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Goliath", "Conspiracy", "CNS");
  }
}

module.exports = ZombieGoliath;
