"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TheCheeseStandsAlone extends Card {
  constructor(game) {
    super(game, "The Cheese Stands Alone", "Unglued", "UGL");
  }
}

module.exports = TheCheeseStandsAlone;
