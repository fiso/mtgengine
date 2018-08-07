"use strict";
const Constants = require ("../../../Constants");
const ViviensInvocationBase = require("../setM19/ViviensInvocation");

class ViviensInvocation extends ViviensInvocationBase {
  constructor (game) {
    super(game, "Vivien's Invocation", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = ViviensInvocation;
