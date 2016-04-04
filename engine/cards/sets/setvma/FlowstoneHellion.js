"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlowstoneHellionBase = require("../setSTH/FlowstoneHellion.js");

class FlowstoneHellion extends FlowstoneHellionBase {
  constructor(game) {
    super(game, "Flowstone Hellion", "Vintage Masters", "VMA");
  }
}

module.exports = FlowstoneHellion;
