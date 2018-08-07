"use strict";
const Constants = require ("../../../Constants");
const SecretSalvageBase = require("../setAER/SecretSalvage");

class SecretSalvage extends SecretSalvageBase {
  constructor (game) {
    super(game, "Secret Salvage", "Aether Revolt Promos", "PAER");
  }
}

module.exports = SecretSalvage;
