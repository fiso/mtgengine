"use strict";
const Constants = require ("../../../Constants");
const ZombieInfestationBase = require("../setPD3/ZombieInfestation");

class ZombieInfestation extends ZombieInfestationBase {
  constructor (game) {
    super(game, "Zombie Infestation", "Magic 2012", "M12");
  }
}

module.exports = ZombieInfestation;
