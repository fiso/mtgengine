"use strict";
const Constants = require ("../../../Constants");
const FlowstoneShamblerBase = require("../set9ED/FlowstoneShambler");

class FlowstoneShambler extends FlowstoneShamblerBase {
  constructor (game) {
    super(game, "Flowstone Shambler", "Stronghold", "STH");
  }
}

module.exports = FlowstoneShambler;
