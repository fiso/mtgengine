"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZombieMob extends UnimplementedCard {
  constructor (game) {
    super(game, "Zombie Mob", "Mirage", "MIR");
  }
}

module.exports = ZombieMob;
