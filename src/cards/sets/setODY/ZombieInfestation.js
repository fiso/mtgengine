"use strict";
const Constants = require ("../../../Constants");
const ZombieInfestationBase = require("../setARC/ZombieInfestation");

class ZombieInfestation extends ZombieInfestationBase {
  constructor (game) {
    super(game, "Zombie Infestation", "Odyssey", "ODY");
  }
}

module.exports = ZombieInfestation;
