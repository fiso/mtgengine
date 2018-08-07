"use strict";
const Constants = require ("../../../Constants");
const MindWarpBase = require("../setPRM/MindWarp");

class MindWarp extends MindWarpBase {
  constructor (game) {
    super(game, "Mind Warp", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MindWarp;
