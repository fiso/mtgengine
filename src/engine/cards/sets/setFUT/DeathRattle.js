"use strict";
const Constants = require ("../../../Constants");
const DeathRattleBase = require("../setMMA/DeathRattle");

class DeathRattle extends DeathRattleBase {
  constructor (game) {
    super(game, "Death Rattle", "Future Sight", "FUT");
  }
}

module.exports = DeathRattle;
