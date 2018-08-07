"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WornPowerstone extends UnimplementedCard {
  constructor (game) {
    super(game, "Worn Powerstone", "Commander 2018", "C18");
  }
}

module.exports = WornPowerstone;
