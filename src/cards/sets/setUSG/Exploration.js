"use strict";
const Constants = require ("../../../Constants");
const ExplorationBase = require("../setCNS/Exploration");

class Exploration extends ExplorationBase {
  constructor(game) {
    super(game, "Exploration", "Urza's Saga", "USG");
  }
}

module.exports = Exploration;
