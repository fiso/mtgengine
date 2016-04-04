"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeepAnalysis extends Card {
  constructor(game) {
    super(game, "Deep Analysis", "Commander 2013 Edition", "C13");
  }
}

module.exports = DeepAnalysis;
