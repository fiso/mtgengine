"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WheelofFortuneBase = require("../setCED/WheelofFortune.js");

class WheelofFortune extends WheelofFortuneBase {
  constructor(game) {
    super(game, "Wheel of Fortune", "Unlimited Edition", "2ED");
  }
}

module.exports = WheelofFortune;
