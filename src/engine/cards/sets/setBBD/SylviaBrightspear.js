"use strict";
const Constants = require ("../../../Constants");
const SylviaBrightspearBase = require("../setPBBD/SylviaBrightspear");

class SylviaBrightspear extends SylviaBrightspearBase {
  constructor (game) {
    super(game, "Sylvia Brightspear", "Battlebond", "BBD");
  }
}

module.exports = SylviaBrightspear;
