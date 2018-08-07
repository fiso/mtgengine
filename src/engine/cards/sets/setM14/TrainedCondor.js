"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrainedCondor extends UnimplementedCard {
  constructor (game) {
    super(game, "Trained Condor", "Magic 2014", "M14");
  }
}

module.exports = TrainedCondor;
