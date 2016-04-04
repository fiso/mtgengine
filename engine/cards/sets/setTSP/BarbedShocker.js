"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarbedShockerBase = require("../setCNS/BarbedShocker.js");

class BarbedShocker extends BarbedShockerBase {
  constructor(game) {
    super(game, "Barbed Shocker", "Time Spiral", "TSP");
  }
}

module.exports = BarbedShocker;
