"use strict";
const Constants = require ("../../../Constants");
const ExplorationBase = require("../setCNS/Exploration");

class Exploration extends ExplorationBase {
  constructor (game) {
    super(game, "Exploration", "Magic Online Promos", "PRM");
  }
}

module.exports = Exploration;
