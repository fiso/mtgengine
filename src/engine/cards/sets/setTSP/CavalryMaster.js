"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CavalryMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Cavalry Master", "Time Spiral", "TSP");
  }
}

module.exports = CavalryMaster;
