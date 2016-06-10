"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenOrrery extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Orrery", "Fifth Dawn", "5DN");
  }
}

module.exports = VedalkenOrrery;
