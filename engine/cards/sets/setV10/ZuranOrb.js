"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZuranOrb extends Card {
  constructor(game) {
    super(game, "Zuran Orb", "From the Vault: Relics", "V10");
  }
}

module.exports = ZuranOrb;
