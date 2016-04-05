"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dissolve extends UnimplementedCard {
  constructor(game) {
    super(game, "Dissolve", "Friday Night Magic", "pFNM");
  }
}

module.exports = Dissolve;
