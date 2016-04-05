"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnabaShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Anaba Shaman", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AnabaShaman;
