"use strict";
const Constants = require ("../../../Constants");
const ArmadilloCloakBase = require("../setEMA/ArmadilloCloak");

class ArmadilloCloak extends ArmadilloCloakBase {
  constructor (game) {
    super(game, "Armadillo Cloak", "Archenemy", "ARC");
  }
}

module.exports = ArmadilloCloak;
