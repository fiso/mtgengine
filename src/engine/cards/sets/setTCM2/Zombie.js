"use strict";
const Constants = require ("../../../Constants");
const ZombieBase = require("../setTC18/Zombie");

class Zombie extends ZombieBase {
  constructor (game) {
    super(game, "Zombie", "Commander Anthology Volume II Tokens", "TCM2");
  }
}

module.exports = Zombie;
