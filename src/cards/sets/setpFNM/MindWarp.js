"use strict";
const Constants = require ("../../../Constants");
const MindWarpBase = require("../set6ED/MindWarp");

class MindWarp extends MindWarpBase {
  constructor (game) {
    super(game, "Mind Warp", "Friday Night Magic", "pFNM");
  }
}

module.exports = MindWarp;
