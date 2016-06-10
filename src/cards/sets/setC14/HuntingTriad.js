"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingTriad extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunting Triad", "Commander 2014", "C14");
  }
}

module.exports = HuntingTriad;
