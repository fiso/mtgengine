"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindWarpBase = require("../set6ED/MindWarp.js");

class MindWarp extends MindWarpBase {
  constructor(game) {
    super(game, "Mind Warp", "Ice Age", "ICE");
  }
}

module.exports = MindWarp;
