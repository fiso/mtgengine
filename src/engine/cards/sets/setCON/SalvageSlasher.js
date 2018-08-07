"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SalvageSlasher extends UnimplementedCard {
  constructor (game) {
    super(game, "Salvage Slasher", "Conflux", "CON");
  }
}

module.exports = SalvageSlasher;
