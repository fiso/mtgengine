"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagusoftheCandelabra extends UnimplementedCard {
  constructor(game) {
    super(game, "Magus of the Candelabra", "Time Spiral", "TSP");
  }
}

module.exports = MagusoftheCandelabra;
