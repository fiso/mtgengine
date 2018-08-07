"use strict";
const Constants = require ("../../../Constants");
const ScavengingGhoulBase = require("../setME4/ScavengingGhoul");

class ScavengingGhoul extends ScavengingGhoulBase {
  constructor (game) {
    super(game, "Scavenging Ghoul", "Fourth Edition", "4ED");
  }
}

module.exports = ScavengingGhoul;
