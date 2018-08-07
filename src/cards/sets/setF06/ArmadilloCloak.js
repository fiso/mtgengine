"use strict";
const Constants = require ("../../../Constants");
const ArmadilloCloakBase = require("../setEMA/ArmadilloCloak");

class ArmadilloCloak extends ArmadilloCloakBase {
  constructor (game) {
    super(game, "Armadillo Cloak", "Friday Night Magic 2006", "F06");
  }
}

module.exports = ArmadilloCloak;
