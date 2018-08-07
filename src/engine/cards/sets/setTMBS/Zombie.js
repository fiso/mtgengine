"use strict";
const Constants = require ("../../../Constants");
const ZombieBase = require("../setTC18/Zombie");

class Zombie extends ZombieBase {
  constructor (game) {
    super(game, "Zombie", "Mirrodin Besieged Tokens", "TMBS");
  }
}

module.exports = Zombie;
