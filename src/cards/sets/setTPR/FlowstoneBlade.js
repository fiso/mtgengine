"use strict";
const Constants = require ("../../../Constants");
const FlowstoneBladeBase = require("../setCNS/FlowstoneBlade");

class FlowstoneBlade extends FlowstoneBladeBase {
  constructor (game) {
    super(game, "Flowstone Blade", "Tempest Remastered", "TPR");
  }
}

module.exports = FlowstoneBlade;
