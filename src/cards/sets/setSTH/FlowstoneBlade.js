"use strict";
const Constants = require ("../../../Constants");
const FlowstoneBladeBase = require("../setCNS/FlowstoneBlade");

class FlowstoneBlade extends FlowstoneBladeBase {
  constructor (game) {
    super(game, "Flowstone Blade", "Stronghold", "STH");
  }
}

module.exports = FlowstoneBlade;
