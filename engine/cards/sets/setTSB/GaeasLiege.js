"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GaeasLiegeBase = require("../setCED/GaeasLiege.js");

class GaeasLiege extends GaeasLiegeBase {
  constructor(game) {
    super(game, "Gaea's Liege", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = GaeasLiege;
