"use strict";
const Constants = require ("../../../Constants");
const WreckingBallBase = require("../setDIS/WreckingBall");

class WreckingBall extends WreckingBallBase {
  constructor(game) {
    super(game, "Wrecking Ball", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = WreckingBall;
