"use strict";
const Constants = require ("../../../Constants");
const StealerofSecretsBase = require("../setW17/StealerofSecrets");

class StealerofSecrets extends StealerofSecretsBase {
  constructor (game) {
    super(game, "Stealer of Secrets", "Return to Ravnica", "RTR");
  }
}

module.exports = StealerofSecrets;
