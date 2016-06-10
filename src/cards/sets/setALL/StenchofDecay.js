"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StenchofDecay extends UnimplementedCard {
  constructor (game) {
    super(game, "Stench of Decay", "Alliances", "ALL");
  }
}

module.exports = StenchofDecay;
