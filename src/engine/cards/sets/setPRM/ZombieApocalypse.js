"use strict";
const Constants = require ("../../../Constants");
const ZombieApocalypseBase = require("../setDKA/ZombieApocalypse");

class ZombieApocalypse extends ZombieApocalypseBase {
  constructor (game) {
    super(game, "Zombie Apocalypse", "Magic Online Promos", "PRM");
  }
}

module.exports = ZombieApocalypse;
