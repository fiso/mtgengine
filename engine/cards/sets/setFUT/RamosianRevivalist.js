"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RamosianRevivalist extends Card {
  constructor(game) {
    super(game, "Ramosian Revivalist", "Future Sight", "FUT");
  }
}

module.exports = RamosianRevivalist;
