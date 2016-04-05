"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeadlongRush extends UnimplementedCard {
  constructor(game) {
    super(game, "Headlong Rush", "Urza's Saga", "USG");
  }
}

module.exports = HeadlongRush;
