"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChokingTethers extends UnimplementedCard {
  constructor (game) {
    super(game, "Choking Tethers", "Masters 25", "A25");
  }
}

module.exports = ChokingTethers;
