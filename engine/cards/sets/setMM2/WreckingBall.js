"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WreckingBallBase = require("../setDIS/WreckingBall.js");

class WreckingBall extends WreckingBallBase {
  constructor(game) {
    super(game, "Wrecking Ball", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = WreckingBall;
