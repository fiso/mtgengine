"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HowlingFuryBase = require("../setPOR/HowlingFury.js");

class HowlingFury extends HowlingFuryBase {
  constructor(game) {
    super(game, "Howling Fury", "Starter 1999", "S99");
  }
}

module.exports = HowlingFury;
