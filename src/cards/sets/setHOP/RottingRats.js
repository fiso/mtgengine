"use strict";
const Constants = require ("../../../Constants");
const RottingRatsBase = require("../setCON/RottingRats");

class RottingRats extends RottingRatsBase {
  constructor (game) {
    super(game, "Rotting Rats", "Planechase", "HOP");
  }
}

module.exports = RottingRats;
