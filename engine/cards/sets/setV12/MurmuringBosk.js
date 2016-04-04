"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MurmuringBosk extends Card {
  constructor(game) {
    super(game, "Murmuring Bosk", "From the Vault: Realms", "V12");
  }
}

module.exports = MurmuringBosk;
