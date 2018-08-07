"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindMaggots extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Maggots", "Exodus", "EXO");
  }
}

module.exports = MindMaggots;
