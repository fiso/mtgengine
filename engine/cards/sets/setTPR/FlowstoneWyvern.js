"use strict";
const Constants = require ("../../../Constants");
const FlowstoneWyvernBase = require("../setTMP/FlowstoneWyvern");

class FlowstoneWyvern extends FlowstoneWyvernBase {
  constructor(game) {
    super(game, "Flowstone Wyvern", "Tempest Remastered", "TPR");
  }
}

module.exports = FlowstoneWyvern;
