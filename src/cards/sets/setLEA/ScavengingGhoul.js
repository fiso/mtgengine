"use strict";
const Constants = require ("../../../Constants");
const ScavengingGhoulBase = require("../setCED/ScavengingGhoul");

class ScavengingGhoul extends ScavengingGhoulBase {
  constructor(game) {
    super(game, "Scavenging Ghoul", "Limited Edition Alpha", "LEA");
  }
}

module.exports = ScavengingGhoul;
