"use strict";
const Constants = require ("../../../Constants");
const MistyRainforestBase = require("../setZEN/MistyRainforest");

class MistyRainforest extends MistyRainforestBase {
  constructor (game) {
    super(game, "Misty Rainforest", "Zendikar Expedition", "EXP");
  }
}

module.exports = MistyRainforest;
