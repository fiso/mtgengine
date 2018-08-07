"use strict";
const Constants = require ("../../../Constants");
const FleshbagMarauderBase = require("../setCM2/FleshbagMarauder");

class FleshbagMarauder extends FleshbagMarauderBase {
  constructor (game) {
    super(game, "Fleshbag Marauder", "Shards of Alara", "ALA");
  }
}

module.exports = FleshbagMarauder;
