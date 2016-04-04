"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShivanGorge extends Card {
  constructor(game) {
    super(game, "Shivan Gorge", "From the Vault: Realms", "V12");
  }
}

module.exports = ShivanGorge;
