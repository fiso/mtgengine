"use strict";
const Constants = require ("../../../Constants");
const BallLightningBase = require("../setBTD/BallLightning");

class BallLightning extends BallLightningBase {
  constructor (game) {
    super(game, "Ball Lightning", "The Dark", "DRK");
  }
}

module.exports = BallLightning;
