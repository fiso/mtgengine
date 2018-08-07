"use strict";
const Constants = require ("../../../Constants");
const ScavengingGhoulBase = require("../setME4/ScavengingGhoul");

class ScavengingGhoul extends ScavengingGhoulBase {
  constructor (game) {
    super(game, "Scavenging Ghoul", "Limited Edition Beta", "LEB");
  }
}

module.exports = ScavengingGhoul;
