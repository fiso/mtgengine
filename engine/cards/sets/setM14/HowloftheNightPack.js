"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HowloftheNightPackBase = require("../setDPA/HowloftheNightPack.js");

class HowloftheNightPack extends HowloftheNightPackBase {
  constructor(game) {
    super(game, "Howl of the Night Pack", "Magic 2014 Core Set", "M14");
  }
}

module.exports = HowloftheNightPack;
