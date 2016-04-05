"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HydraBroodmaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Hydra Broodmaster", "Clash Pack", "CPK");
  }
}

module.exports = HydraBroodmaster;
