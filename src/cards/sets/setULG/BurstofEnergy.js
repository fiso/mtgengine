"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurstofEnergy extends UnimplementedCard {
  constructor (game) {
    super(game, "Burst of Energy", "Urza's Legacy", "ULG");
  }
}

module.exports = BurstofEnergy;
