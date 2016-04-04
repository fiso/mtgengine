"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientTomb extends Card {
  constructor(game) {
    super(game, "Ancient Tomb", "From the Vault: Realms", "V12");
  }
}

module.exports = AncientTomb;
