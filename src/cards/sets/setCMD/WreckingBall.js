"use strict";
const Constants = require ("../../../Constants");
const WreckingBallBase = require("../setCMA/WreckingBall");

class WreckingBall extends WreckingBallBase {
  constructor (game) {
    super(game, "Wrecking Ball", "Commander 2011", "CMD");
  }
}

module.exports = WreckingBall;
