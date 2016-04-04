"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlowstoneCrusherBase = require("../setNMS/FlowstoneCrusher.js");

class FlowstoneCrusher extends FlowstoneCrusherBase {
  constructor(game) {
    super(game, "Flowstone Crusher", "Ninth Edition", "9ED");
  }
}

module.exports = FlowstoneCrusher;
