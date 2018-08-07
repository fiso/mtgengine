"use strict";
const Constants = require ("../../../Constants");
const BallLightningBase = require("../setA25/BallLightning");

class BallLightning extends BallLightningBase {
  constructor (game) {
    super(game, "Ball Lightning", "Judge Gift Cards 2001", "G01");
  }
}

module.exports = BallLightning;
