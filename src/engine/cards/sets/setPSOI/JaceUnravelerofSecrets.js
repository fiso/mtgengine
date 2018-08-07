"use strict";
const Constants = require ("../../../Constants");
const JaceUnravelerofSecretsBase = require("../setPS17/JaceUnravelerofSecrets");

class JaceUnravelerofSecrets extends JaceUnravelerofSecretsBase {
  constructor (game) {
    super(game, "Jace, Unraveler of Secrets", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = JaceUnravelerofSecrets;
