"use strict";
const Constants = require ("../../../Constants");
const GroundskeeperBase = require("../setMMQ/Groundskeeper");

class Groundskeeper extends GroundskeeperBase {
  constructor(game) {
    super(game, "Groundskeeper", "Ninth Edition", "9ED");
  }
}

module.exports = Groundskeeper;
