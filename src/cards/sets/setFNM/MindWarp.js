"use strict";
const Constants = require ("../../../Constants");
const MindWarpBase = require("../setPRM/MindWarp");

class MindWarp extends MindWarpBase {
  constructor (game) {
    super(game, "Mind Warp", "Friday Night Magic 2000", "FNM");
  }
}

module.exports = MindWarp;
