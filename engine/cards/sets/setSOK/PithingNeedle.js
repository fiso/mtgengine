"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PithingNeedleBase = require("../setM10/PithingNeedle.js");

class PithingNeedle extends PithingNeedleBase {
  constructor(game) {
    super(game, "Pithing Needle", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = PithingNeedle;
