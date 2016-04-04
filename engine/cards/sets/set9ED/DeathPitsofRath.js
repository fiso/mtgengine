"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathPitsofRathBase = require("../set8ED/DeathPitsofRath.js");

class DeathPitsofRath extends DeathPitsofRathBase {
  constructor(game) {
    super(game, "Death Pits of Rath", "Ninth Edition", "9ED");
  }
}

module.exports = DeathPitsofRath;
