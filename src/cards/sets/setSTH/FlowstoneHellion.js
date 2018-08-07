"use strict";
const Constants = require ("../../../Constants");
const FlowstoneHellionBase = require("../setVMA/FlowstoneHellion");

class FlowstoneHellion extends FlowstoneHellionBase {
  constructor (game) {
    super(game, "Flowstone Hellion", "Stronghold", "STH");
  }
}

module.exports = FlowstoneHellion;
