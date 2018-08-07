"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DimirMachinations extends UnimplementedCard {
  constructor (game) {
    super(game, "Dimir Machinations", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DimirMachinations;
