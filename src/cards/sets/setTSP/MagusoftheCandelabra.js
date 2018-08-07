"use strict";
const Constants = require ("../../../Constants");
const MagusoftheCandelabraBase = require("../setBBD/MagusoftheCandelabra");

class MagusoftheCandelabra extends MagusoftheCandelabraBase {
  constructor (game) {
    super(game, "Magus of the Candelabra", "Time Spiral", "TSP");
  }
}

module.exports = MagusoftheCandelabra;
