"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZombieAssassin extends Card {
  constructor(game) {
    super(game, "Zombie Assassin", "Odyssey", "ODY");
  }
}

module.exports = ZombieAssassin;
