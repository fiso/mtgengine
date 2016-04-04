"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmadilloCloakBase = require("../setARC/ArmadilloCloak.js");

class ArmadilloCloak extends ArmadilloCloakBase {
  constructor(game) {
    super(game, "Armadillo Cloak", "Friday Night Magic", "pFNM");
  }
}

module.exports = ArmadilloCloak;
