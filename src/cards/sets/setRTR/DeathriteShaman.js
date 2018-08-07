"use strict";
const Constants = require ("../../../Constants");
const DeathriteShamanBase = require("../setEMA/DeathriteShaman");

class DeathriteShaman extends DeathriteShamanBase {
  constructor (game) {
    super(game, "Deathrite Shaman", "Return to Ravnica", "RTR");
  }
}

module.exports = DeathriteShaman;
