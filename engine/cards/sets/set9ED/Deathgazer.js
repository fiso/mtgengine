"use strict";
const Constants = require ("../../../Constants");
const DeathgazerBase = require("../set8ED/Deathgazer");

class Deathgazer extends DeathgazerBase {
  constructor(game) {
    super(game, "Deathgazer", "Ninth Edition", "9ED");
  }
}

module.exports = Deathgazer;
