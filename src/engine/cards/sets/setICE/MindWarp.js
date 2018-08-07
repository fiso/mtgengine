"use strict";
const Constants = require ("../../../Constants");
const MindWarpBase = require("../setPRM/MindWarp");

class MindWarp extends MindWarpBase {
  constructor (game) {
    super(game, "Mind Warp", "Ice Age", "ICE");
  }
}

module.exports = MindWarp;
