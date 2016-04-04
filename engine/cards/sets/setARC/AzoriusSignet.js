"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AzoriusSignet extends Card {
  constructor(game) {
    super(game, "Azorius Signet", "Archenemy", "ARC");
  }
}

module.exports = AzoriusSignet;
