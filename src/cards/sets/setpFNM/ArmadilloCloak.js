"use strict";
const Constants = require ("../../../Constants");
const ArmadilloCloakBase = require("../setARC/ArmadilloCloak");

class ArmadilloCloak extends ArmadilloCloakBase {
  constructor (game) {
    super(game, "Armadillo Cloak", "Friday Night Magic", "pFNM");
  }
}

module.exports = ArmadilloCloak;
