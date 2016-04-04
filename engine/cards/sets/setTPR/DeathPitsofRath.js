"use strict";
const Constants = require ("../../../Constants");
const DeathPitsofRathBase = require("../set8ED/DeathPitsofRath");

class DeathPitsofRath extends DeathPitsofRathBase {
  constructor(game) {
    super(game, "Death Pits of Rath", "Tempest Remastered", "TPR");
  }
}

module.exports = DeathPitsofRath;
