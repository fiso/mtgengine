"use strict";
const Constants = require ("../../../Constants");
const FlowstoneMaulerBase = require("../setSTH/FlowstoneMauler");

class FlowstoneMauler extends FlowstoneMaulerBase {
  constructor (game) {
    super(game, "Flowstone Mauler", "Tempest Remastered", "TPR");
  }
}

module.exports = FlowstoneMauler;
