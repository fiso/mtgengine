"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoltenHydra extends UnimplementedCard {
  constructor(game) {
    super(game, "Molten Hydra", "Urza's Legacy", "ULG");
  }
}

module.exports = MoltenHydra;
