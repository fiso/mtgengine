"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RodofRuinBase = require("../set6ED/RodofRuin.js");

class RodofRuin extends RodofRuinBase {
  constructor(game) {
    super(game, "Rod of Ruin", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = RodofRuin;
