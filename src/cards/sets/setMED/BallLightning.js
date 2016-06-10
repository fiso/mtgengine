"use strict";
const Constants = require ("../../../Constants");
const BallLightningBase = require("../setBTD/BallLightning");

class BallLightning extends BallLightningBase {
  constructor (game) {
    super(game, "Ball Lightning", "Masters Edition", "MED");
  }
}

module.exports = BallLightning;
