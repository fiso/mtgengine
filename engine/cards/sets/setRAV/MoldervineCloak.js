"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoldervineCloakBase = require("../setMMA/MoldervineCloak.js");

class MoldervineCloak extends MoldervineCloakBase {
  constructor(game) {
    super(game, "Moldervine Cloak", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MoldervineCloak;
