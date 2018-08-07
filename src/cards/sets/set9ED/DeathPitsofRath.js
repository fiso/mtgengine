"use strict";
const Constants = require ("../../../Constants");
const DeathPitsofRathBase = require("../setTPR/DeathPitsofRath");

class DeathPitsofRath extends DeathPitsofRathBase {
  constructor (game) {
    super(game, "Death Pits of Rath", "Ninth Edition", "9ED");
  }
}

module.exports = DeathPitsofRath;
