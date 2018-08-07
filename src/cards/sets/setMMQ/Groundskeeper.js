"use strict";
const Constants = require ("../../../Constants");
const GroundskeeperBase = require("../setSOI/Groundskeeper");

class Groundskeeper extends GroundskeeperBase {
  constructor (game) {
    super(game, "Groundskeeper", "Mercadian Masques", "MMQ");
  }
}

module.exports = Groundskeeper;
