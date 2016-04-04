"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViridianShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Viridian Shaman", "Commander 2015", "C15");
  }
}

module.exports = ViridianShaman;
