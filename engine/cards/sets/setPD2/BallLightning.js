"use strict";
const Constants = require ("../../../Constants");
const BallLightningBase = require("../setBTD/BallLightning");

class BallLightning extends BallLightningBase {
  constructor(game) {
    super(game, "Ball Lightning", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = BallLightning;
