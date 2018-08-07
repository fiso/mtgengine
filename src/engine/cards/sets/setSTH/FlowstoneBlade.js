"use strict";
const Constants = require ("../../../Constants");
const FlowstoneBladeBase = require("../setTPR/FlowstoneBlade");

class FlowstoneBlade extends FlowstoneBladeBase {
  constructor (game) {
    super(game, "Flowstone Blade", "Stronghold", "STH");
  }
}

module.exports = FlowstoneBlade;
