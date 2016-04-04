"use strict";
const Constants = require ("../../../Constants");
const DregscapeZombieBase = require("../setARC/DregscapeZombie");

class DregscapeZombie extends DregscapeZombieBase {
  constructor(game) {
    super(game, "Dregscape Zombie", "Shards of Alara", "ALA");
  }
}

module.exports = DregscapeZombie;
