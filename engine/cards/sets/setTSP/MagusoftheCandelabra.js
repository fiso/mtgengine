"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagusoftheCandelabra extends Card {
  constructor(game) {
    super(game, "Magus of the Candelabra", "Time Spiral", "TSP");
  }
}

module.exports = MagusoftheCandelabra;
