"use strict";
const Constants = require ("../../../Constants");
const FlowstoneCrusherBase = require("../setNMS/FlowstoneCrusher");

class FlowstoneCrusher extends FlowstoneCrusherBase {
  constructor(game) {
    super(game, "Flowstone Crusher", "Ninth Edition", "9ED");
  }
}

module.exports = FlowstoneCrusher;
