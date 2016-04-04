"use strict";
const Constants = require ("../../../Constants");
const SzadekLordofSecretsBase = require("../setCMD/SzadekLordofSecrets");

class SzadekLordofSecrets extends SzadekLordofSecretsBase {
  constructor(game) {
    super(game, "Szadek, Lord of Secrets", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SzadekLordofSecrets;
