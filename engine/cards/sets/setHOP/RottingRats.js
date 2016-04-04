"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RottingRatsBase = require("../setCON/RottingRats.js");

class RottingRats extends RottingRatsBase {
  constructor(game) {
    super(game, "Rotting Rats", "Planechase", "HOP");
  }
}

module.exports = RottingRats;
