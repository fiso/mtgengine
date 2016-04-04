"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GnawingZombie extends Card {
  constructor(game) {
    super(game, "Gnawing Zombie", "Magic 2014 Core Set", "M14");
  }
}

module.exports = GnawingZombie;
