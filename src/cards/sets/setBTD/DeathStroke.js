"use strict";
const Constants = require ("../../../Constants");
const DeathStrokeBase = require("../setTPR/DeathStroke");

class DeathStroke extends DeathStrokeBase {
  constructor (game) {
    super(game, "Death Stroke", "Beatdown Box Set", "BTD");
  }
}

module.exports = DeathStroke;
