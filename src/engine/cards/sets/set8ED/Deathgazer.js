"use strict";
const Constants = require ("../../../Constants");
const DeathgazerBase = require("../set9ED/Deathgazer");

class Deathgazer extends DeathgazerBase {
  constructor (game) {
    super(game, "Deathgazer", "Eighth Edition", "8ED");
  }
}

module.exports = Deathgazer;
