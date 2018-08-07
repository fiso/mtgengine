"use strict";
const Constants = require ("../../../Constants");
const ZombieBase = require("../setTC18/Zombie");

class Zombie extends ZombieBase {
  constructor (game) {
    super(game, "Zombie", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Zombie;
