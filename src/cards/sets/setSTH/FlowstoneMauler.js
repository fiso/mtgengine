"use strict";
const Constants = require ("../../../Constants");
const FlowstoneMaulerBase = require("../setTPR/FlowstoneMauler");

class FlowstoneMauler extends FlowstoneMaulerBase {
  constructor (game) {
    super(game, "Flowstone Mauler", "Stronghold", "STH");
  }
}

module.exports = FlowstoneMauler;
