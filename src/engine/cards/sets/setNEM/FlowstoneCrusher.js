"use strict";
const Constants = require ("../../../Constants");
const FlowstoneCrusherBase = require("../set9ED/FlowstoneCrusher");

class FlowstoneCrusher extends FlowstoneCrusherBase {
  constructor (game) {
    super(game, "Flowstone Crusher", "Nemesis", "NEM");
  }
}

module.exports = FlowstoneCrusher;
