"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlowstoneWyvernBase = require("../setTMP/FlowstoneWyvern.js");

class FlowstoneWyvern extends FlowstoneWyvernBase {
  constructor(game) {
    super(game, "Flowstone Wyvern", "Tempest Remastered", "TPR");
  }
}

module.exports = FlowstoneWyvern;
