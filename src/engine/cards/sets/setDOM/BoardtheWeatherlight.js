"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoardtheWeatherlight extends UnimplementedCard {
  constructor (game) {
    super(game, "Board the Weatherlight", "Dominaria", "DOM");
  }
}

module.exports = BoardtheWeatherlight;
