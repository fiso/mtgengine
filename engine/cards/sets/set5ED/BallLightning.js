"use strict";
const Constants = require ("../../../Constants");
const BallLightningBase = require("../setBTD/BallLightning");

class BallLightning extends BallLightningBase {
  constructor(game) {
    super(game, "Ball Lightning", "Fifth Edition", "5ED");
  }
}

module.exports = BallLightning;
