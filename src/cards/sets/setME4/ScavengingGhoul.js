"use strict";
const Constants = require ("../../../Constants");
const ScavengingGhoulBase = require("../setCED/ScavengingGhoul");

class ScavengingGhoul extends ScavengingGhoulBase {
  constructor(game) {
    super(game, "Scavenging Ghoul", "Masters Edition IV", "ME4");
  }
}

module.exports = ScavengingGhoul;
