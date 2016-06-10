"use strict";
const Constants = require ("../../../Constants");
const GroundskeeperBase = require("../setMMQ/Groundskeeper");

class Groundskeeper extends GroundskeeperBase {
  constructor (game) {
    super(game, "Groundskeeper", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Groundskeeper;
