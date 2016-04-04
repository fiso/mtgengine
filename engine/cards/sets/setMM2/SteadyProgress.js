"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteadyProgress extends Card {
  constructor(game) {
    super(game, "Steady Progress", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SteadyProgress;
