"use strict";
const Constants = require ("../../../Constants");
const FleshbagMarauderBase = require("../setDD3_GVL/FleshbagMarauder");

class FleshbagMarauder extends FleshbagMarauderBase {
  constructor (game) {
    super(game, "Fleshbag Marauder", "Shards of Alara", "ALA");
  }
}

module.exports = FleshbagMarauder;
