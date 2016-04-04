"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoltenHydra extends Card {
  constructor(game) {
    super(game, "Molten Hydra", "Urza's Legacy", "ULG");
  }
}

module.exports = MoltenHydra;
