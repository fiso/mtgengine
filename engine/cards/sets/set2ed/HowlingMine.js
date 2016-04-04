"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HowlingMineBase = require("../set6ED/HowlingMine.js");

class HowlingMine extends HowlingMineBase {
  constructor(game) {
    super(game, "Howling Mine", "Unlimited Edition", "2ED");
  }
}

module.exports = HowlingMine;
