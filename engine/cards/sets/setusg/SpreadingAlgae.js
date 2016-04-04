"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpreadingAlgaeBase = require("../set8ED/SpreadingAlgae.js");

class SpreadingAlgae extends SpreadingAlgaeBase {
  constructor(game) {
    super(game, "Spreading Algae", "Urza's Saga", "USG");
  }
}

module.exports = SpreadingAlgae;
