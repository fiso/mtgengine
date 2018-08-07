"use strict";
const Constants = require ("../../../Constants");
const RottingRatsBase = require("../setHOP/RottingRats");

class RottingRats extends RottingRatsBase {
  constructor (game) {
    super(game, "Rotting Rats", "Conflux", "CON");
  }
}

module.exports = RottingRats;
