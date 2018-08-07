"use strict";
const Constants = require ("../../../Constants");
const MurmuringBoskBase = require("../setCM2/MurmuringBosk");

class MurmuringBosk extends MurmuringBoskBase {
  constructor (game) {
    super(game, "Murmuring Bosk", "From the Vault: Realms", "V12");
  }
}

module.exports = MurmuringBosk;
