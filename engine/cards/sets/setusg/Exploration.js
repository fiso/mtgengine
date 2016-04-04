"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExplorationBase = require("../setCNS/Exploration.js");

class Exploration extends ExplorationBase {
  constructor(game) {
    super(game, "Exploration", "Urza's Saga", "USG");
  }
}

module.exports = Exploration;
