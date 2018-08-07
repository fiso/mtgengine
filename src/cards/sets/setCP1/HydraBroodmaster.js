"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HydraBroodmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Hydra Broodmaster", "Magic 2015 Clash Pack", "CP1");
  }
}

module.exports = HydraBroodmaster;
