"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RodofRuinBase = require("../set6ED/RodofRuin.js");

class RodofRuin extends RodofRuinBase {
  constructor(game) {
    super(game, "Rod of Ruin", "Collector's Edition", "CED");
  }
}

module.exports = RodofRuin;
