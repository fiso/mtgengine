"use strict";
const Constants = require ("../../../Constants");
const WreckingBallBase = require("../setDIS/WreckingBall");

class WreckingBall extends WreckingBallBase {
  constructor(game) {
    super(game, "Wrecking Ball", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = WreckingBall;
