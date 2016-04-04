"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SalvageSlasher extends Card {
  constructor(game) {
    super(game, "Salvage Slasher", "Conflux", "CON");
  }
}

module.exports = SalvageSlasher;
