"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZombieMob extends Card {
  constructor(game) {
    super(game, "Zombie Mob", "Mirage", "MIR");
  }
}

module.exports = ZombieMob;
