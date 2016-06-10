"use strict";
const Constants = require ("../../../Constants");
const BallLightningBase = require("../setBTD/BallLightning");

class BallLightning extends BallLightningBase {
  constructor (game) {
    super(game, "Ball Lightning", "Magic 2010", "M10");
  }
}

module.exports = BallLightning;
