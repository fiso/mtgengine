"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConvalescentCare extends UnimplementedCard {
  constructor (game) {
    super(game, "Convalescent Care", "Onslaught", "ONS");
  }
}

module.exports = ConvalescentCare;
