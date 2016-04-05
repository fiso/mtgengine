"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CircularLogic extends UnimplementedCard {
  constructor(game) {
    super(game, "Circular Logic", "Friday Night Magic", "pFNM");
  }
}

module.exports = CircularLogic;
