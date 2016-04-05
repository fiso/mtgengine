"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheCheeseStandsAlone extends UnimplementedCard {
  constructor(game) {
    super(game, "The Cheese Stands Alone", "Unglued", "UGL");
  }
}

module.exports = TheCheeseStandsAlone;
