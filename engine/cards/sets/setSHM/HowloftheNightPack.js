"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HowloftheNightPackBase = require("../setDPA/HowloftheNightPack.js");

class HowloftheNightPack extends HowloftheNightPackBase {
  constructor(game) {
    super(game, "Howl of the Night Pack", "Shadowmoor", "SHM");
  }
}

module.exports = HowloftheNightPack;
