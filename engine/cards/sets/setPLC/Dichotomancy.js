"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dichotomancy extends UnimplementedCard {
  constructor(game) {
    super(game, "Dichotomancy", "Planar Chaos", "PLC");
  }
}

module.exports = Dichotomancy;
