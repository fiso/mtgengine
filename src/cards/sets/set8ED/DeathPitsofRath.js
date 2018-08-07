"use strict";
const Constants = require ("../../../Constants");
const DeathPitsofRathBase = require("../setTPR/DeathPitsofRath");

class DeathPitsofRath extends DeathPitsofRathBase {
  constructor (game) {
    super(game, "Death Pits of Rath", "Eighth Edition", "8ED");
  }
}

module.exports = DeathPitsofRath;
