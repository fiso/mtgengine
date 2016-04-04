"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StealerofSecretsBase = require("../setDDM/StealerofSecrets.js");

class StealerofSecrets extends StealerofSecretsBase {
  constructor(game) {
    super(game, "Stealer of Secrets", "Return to Ravnica", "RTR");
  }
}

module.exports = StealerofSecrets;
