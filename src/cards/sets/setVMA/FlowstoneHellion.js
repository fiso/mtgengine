"use strict";
const Constants = require ("../../../Constants");
const FlowstoneHellionBase = require("../setSTH/FlowstoneHellion");

class FlowstoneHellion extends FlowstoneHellionBase {
  constructor (game) {
    super(game, "Flowstone Hellion", "Vintage Masters", "VMA");
  }
}

module.exports = FlowstoneHellion;
