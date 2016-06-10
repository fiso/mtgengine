"use strict";
const Constants = require ("../../../Constants");
const ArmadilloCloakBase = require("../setARC/ArmadilloCloak");

class ArmadilloCloak extends ArmadilloCloakBase {
  constructor (game) {
    super(game, "Armadillo Cloak", "Invasion", "INV");
  }
}

module.exports = ArmadilloCloak;
