"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenOrrery extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Orrery", "Conspiracy", "CNS");
  }
}

module.exports = VedalkenOrrery;
