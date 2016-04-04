"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MistyRainforestBase = require("../setZEN/MistyRainforest.js");

class MistyRainforest extends MistyRainforestBase {
  constructor(game) {
    super(game, "Misty Rainforest", "Zendikar Expedition", "EXP");
  }
}

module.exports = MistyRainforest;
