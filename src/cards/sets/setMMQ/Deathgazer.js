"use strict";
const Constants = require ("../../../Constants");
const DeathgazerBase = require("../set8ED/Deathgazer");

class Deathgazer extends DeathgazerBase {
  constructor (game) {
    super(game, "Deathgazer", "Mercadian Masques", "MMQ");
  }
}

module.exports = Deathgazer;
