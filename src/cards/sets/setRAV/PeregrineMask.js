"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PeregrineMask extends UnimplementedCard {
  constructor(game) {
    super(game, "Peregrine Mask", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PeregrineMask;
