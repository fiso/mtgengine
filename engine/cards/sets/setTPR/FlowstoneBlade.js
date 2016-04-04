"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlowstoneBladeBase = require("../setCNS/FlowstoneBlade.js");

class FlowstoneBlade extends FlowstoneBladeBase {
  constructor(game) {
    super(game, "Flowstone Blade", "Tempest Remastered", "TPR");
  }
}

module.exports = FlowstoneBlade;
