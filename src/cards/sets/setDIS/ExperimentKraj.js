"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExperimentKraj extends UnimplementedCard {
  constructor (game) {
    super(game, "Experiment Kraj", "Dissension", "DIS");
  }
}

module.exports = ExperimentKraj;
