"use strict";
const Constants = require ("../../../Constants");
const FlowstoneFloodBase = require("../setWC99/FlowstoneFlood");

class FlowstoneFlood extends FlowstoneFloodBase {
  constructor (game) {
    super(game, "Flowstone Flood", "Exodus", "EXO");
  }
}

module.exports = FlowstoneFlood;
