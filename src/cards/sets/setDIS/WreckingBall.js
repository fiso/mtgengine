"use strict";
const Constants = require ("../../../Constants");
const WreckingBallBase = require("../setCMA/WreckingBall");

class WreckingBall extends WreckingBallBase {
  constructor (game) {
    super(game, "Wrecking Ball", "Dissension", "DIS");
  }
}

module.exports = WreckingBall;
