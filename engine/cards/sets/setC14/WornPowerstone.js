"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WornPowerstone extends UnimplementedCard {
  constructor(game) {
    super(game, "Worn Powerstone", "Commander 2014", "C14");
  }
}

module.exports = WornPowerstone;
