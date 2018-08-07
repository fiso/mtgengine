"use strict";
const Constants = require ("../../../Constants");
const MoldervineCloakBase = require("../setMMA/MoldervineCloak");

class MoldervineCloak extends MoldervineCloakBase {
  constructor (game) {
    super(game, "Moldervine Cloak", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MoldervineCloak;
