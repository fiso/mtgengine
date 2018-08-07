"use strict";
const Constants = require ("../../../Constants");
const GnawingZombieBase = require("../setMM3/GnawingZombie");

class GnawingZombie extends GnawingZombieBase {
  constructor (game) {
    super(game, "Gnawing Zombie", "Magic 2014", "M14");
  }
}

module.exports = GnawingZombie;
