"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Despise extends UnimplementedCard {
  constructor (game) {
    super(game, "Despise", "Friday Night Magic", "pFNM");
  }
}

module.exports = Despise;
