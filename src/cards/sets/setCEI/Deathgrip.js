"use strict";
const Constants = require ("../../../Constants");
const DeathgripBase = require("../setCED/Deathgrip");

class Deathgrip extends DeathgripBase {
  constructor (game) {
    super(game, "Deathgrip", "International Collector's Edition", "CEI");
  }
}

module.exports = Deathgrip;
