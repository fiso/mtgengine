"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BallLightningBase = require("../setBTD/BallLightning.js");

class BallLightning extends BallLightningBase {
  constructor(game) {
    super(game, "Ball Lightning", "The Dark", "DRK");
  }
}

module.exports = BallLightning;
