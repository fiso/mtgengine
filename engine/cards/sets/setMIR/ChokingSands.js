"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChokingSands extends UnimplementedCard {
  constructor(game) {
    super(game, "Choking Sands", "Mirage", "MIR");
  }
}

module.exports = ChokingSands;
