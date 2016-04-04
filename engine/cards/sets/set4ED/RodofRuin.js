"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RodofRuinBase = require("../set6ED/RodofRuin.js");

class RodofRuin extends RodofRuinBase {
  constructor(game) {
    super(game, "Rod of Ruin", "Fourth Edition", "4ED");
  }
}

module.exports = RodofRuin;
