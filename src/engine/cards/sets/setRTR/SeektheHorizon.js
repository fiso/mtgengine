"use strict";
const Constants = require ("../../../Constants");
const SeektheHorizonBase = require("../setDDR/SeektheHorizon");

class SeektheHorizon extends SeektheHorizonBase {
  constructor (game) {
    super(game, "Seek the Horizon", "Return to Ravnica", "RTR");
  }
}

module.exports = SeektheHorizon;
