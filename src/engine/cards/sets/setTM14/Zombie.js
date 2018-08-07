"use strict";
const Constants = require ("../../../Constants");
const ZombieBase = require("../setTC18/Zombie");

class Zombie extends ZombieBase {
  constructor (game) {
    super(game, "Zombie", "Magic 2014 Tokens", "TM14");
  }
}

module.exports = Zombie;
