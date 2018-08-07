"use strict";
const Constants = require ("../../../Constants");
const MistyRainforestBase = require("../setMM3/MistyRainforest");

class MistyRainforest extends MistyRainforestBase {
  constructor (game) {
    super(game, "Misty Rainforest", "Zendikar", "ZEN");
  }
}

module.exports = MistyRainforest;
