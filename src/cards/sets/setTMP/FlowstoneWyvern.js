"use strict";
const Constants = require ("../../../Constants");
const FlowstoneWyvernBase = require("../setTPR/FlowstoneWyvern");

class FlowstoneWyvern extends FlowstoneWyvernBase {
  constructor (game) {
    super(game, "Flowstone Wyvern", "Tempest", "TMP");
  }
}

module.exports = FlowstoneWyvern;
