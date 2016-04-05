"use strict";
const Constants = require ("../../../Constants");
const DeathRattleBase = require("../setFUT/DeathRattle");

class DeathRattle extends DeathRattleBase {
  constructor(game) {
    super(game, "Death Rattle", "Modern Masters", "MMA");
  }
}

module.exports = DeathRattle;
