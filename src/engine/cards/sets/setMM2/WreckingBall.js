"use strict";
const Constants = require ("../../../Constants");
const WreckingBallBase = require("../setCMA/WreckingBall");

class WreckingBall extends WreckingBallBase {
  constructor (game) {
    super(game, "Wrecking Ball", "Modern Masters 2015", "MM2");
  }
}

module.exports = WreckingBall;
