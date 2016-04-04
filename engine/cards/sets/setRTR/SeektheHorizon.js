"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeektheHorizonBase = require("../setKTK/SeektheHorizon.js");

class SeektheHorizon extends SeektheHorizonBase {
  constructor(game) {
    super(game, "Seek the Horizon", "Return to Ravnica", "RTR");
  }
}

module.exports = SeektheHorizon;
