"use strict";
const Constants = require ("../../../Constants");
const StealerofSecretsBase = require("../setW17/StealerofSecrets");

class StealerofSecrets extends StealerofSecretsBase {
  constructor (game) {
    super(game, "Stealer of Secrets", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = StealerofSecrets;
