"use strict";
const Constants = require ("../../../Constants");
const BewilderBase = require("../setIMA/Bewilder");

class Bewilder extends BewilderBase {
  constructor (game) {
    super(game, "Bewilder", "Time Spiral", "TSP");
  }
}

module.exports = Bewilder;
