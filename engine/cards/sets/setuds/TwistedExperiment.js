"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TwistedExperiment extends Card {
  constructor(game) {
    super(game, "Twisted Experiment", "Urza's Destiny", "UDS");
  }
}

module.exports = TwistedExperiment;
