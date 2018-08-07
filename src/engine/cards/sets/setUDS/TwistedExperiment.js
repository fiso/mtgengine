"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwistedExperiment extends UnimplementedCard {
  constructor (game) {
    super(game, "Twisted Experiment", "Urza's Destiny", "UDS");
  }
}

module.exports = TwistedExperiment;
