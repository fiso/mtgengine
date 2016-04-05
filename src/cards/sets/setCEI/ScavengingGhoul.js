"use strict";
const Constants = require ("../../../Constants");
const ScavengingGhoulBase = require("../setCED/ScavengingGhoul");

class ScavengingGhoul extends ScavengingGhoulBase {
  constructor(game) {
    super(game, "Scavenging Ghoul", "International Collector's Edition", "CEI");
  }
}

module.exports = ScavengingGhoul;
