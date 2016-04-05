"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CracktheEarth extends UnimplementedCard {
  constructor(game) {
    super(game, "Crack the Earth", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = CracktheEarth;
