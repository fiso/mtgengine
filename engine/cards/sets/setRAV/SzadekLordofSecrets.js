"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SzadekLordofSecretsBase = require("../setCMD/SzadekLordofSecrets.js");

class SzadekLordofSecrets extends SzadekLordofSecretsBase {
  constructor(game) {
    super(game, "Szadek, Lord of Secrets", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SzadekLordofSecrets;
