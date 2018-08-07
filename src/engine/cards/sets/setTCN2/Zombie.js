"use strict";
const Constants = require ("../../../Constants");
const ZombieBase = require("../setTC18/Zombie");

class Zombie extends ZombieBase {
  constructor (game) {
    super(game, "Zombie", "Conspiracy: Take the Crown Tokens", "TCN2");
  }
}

module.exports = Zombie;
