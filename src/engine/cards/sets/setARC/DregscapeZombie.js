"use strict";
const Constants = require ("../../../Constants");
const DregscapeZombieBase = require("../setMM3/DregscapeZombie");

class DregscapeZombie extends DregscapeZombieBase {
  constructor (game) {
    super(game, "Dregscape Zombie", "Archenemy", "ARC");
  }
}

module.exports = DregscapeZombie;
