"use strict";
const Constants = require ("../../../Constants");
const BarbedShockerBase = require("../setCNS/BarbedShocker");

class BarbedShocker extends BarbedShockerBase {
  constructor (game) {
    super(game, "Barbed Shocker", "Time Spiral", "TSP");
  }
}

module.exports = BarbedShocker;
