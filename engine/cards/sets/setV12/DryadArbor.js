"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DryadArbor extends Card {
  constructor(game) {
    super(game, "Dryad Arbor", "From the Vault: Realms", "V12");
  }
}

module.exports = DryadArbor;
