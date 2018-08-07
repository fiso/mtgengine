"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conviction extends UnimplementedCard {
  constructor (game) {
    super(game, "Conviction", "Aether Revolt", "AER");
  }
}

module.exports = Conviction;
