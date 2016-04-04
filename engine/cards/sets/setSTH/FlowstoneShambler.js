"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlowstoneShamblerBase = require("../set9ED/FlowstoneShambler.js");

class FlowstoneShambler extends FlowstoneShamblerBase {
  constructor(game) {
    super(game, "Flowstone Shambler", "Stronghold", "STH");
  }
}

module.exports = FlowstoneShambler;
