"use strict";
const Constants = require ("../../../Constants");
const HowlingBansheeBase = require("../setGVL/HowlingBanshee");

class HowlingBanshee extends HowlingBansheeBase {
  constructor (game) {
    super(game, "Howling Banshee", "Magic 2010", "M10");
  }
}

module.exports = HowlingBanshee;
