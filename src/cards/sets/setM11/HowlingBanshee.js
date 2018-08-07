"use strict";
const Constants = require ("../../../Constants");
const HowlingBansheeBase = require("../setGVL/HowlingBanshee");

class HowlingBanshee extends HowlingBansheeBase {
  constructor (game) {
    super(game, "Howling Banshee", "Magic 2011", "M11");
  }
}

module.exports = HowlingBanshee;
