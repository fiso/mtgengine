"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlacialChasm extends Card {
  constructor(game) {
    super(game, "Glacial Chasm", "From the Vault: Realms", "V12");
  }
}

module.exports = GlacialChasm;
