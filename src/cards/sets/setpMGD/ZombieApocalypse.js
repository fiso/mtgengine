"use strict";
const Constants = require ("../../../Constants");
const ZombieApocalypseBase = require("../setDKA/ZombieApocalypse");

class ZombieApocalypse extends ZombieApocalypseBase {
  constructor (game) {
    super(game, "Zombie Apocalypse", "Magic Game Day", "pMGD");
  }
}

module.exports = ZombieApocalypse;
