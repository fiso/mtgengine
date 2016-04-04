"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathgazerBase = require("../set8ED/Deathgazer.js");

class Deathgazer extends DeathgazerBase {
  constructor(game) {
    super(game, "Deathgazer", "Mercadian Masques", "MMQ");
  }
}

module.exports = Deathgazer;
