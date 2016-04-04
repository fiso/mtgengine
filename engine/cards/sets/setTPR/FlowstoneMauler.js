"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlowstoneMaulerBase = require("../setSTH/FlowstoneMauler.js");

class FlowstoneMauler extends FlowstoneMaulerBase {
  constructor(game) {
    super(game, "Flowstone Mauler", "Tempest Remastered", "TPR");
  }
}

module.exports = FlowstoneMauler;
