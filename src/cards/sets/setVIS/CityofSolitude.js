"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CityofSolitude extends UnimplementedCard {
  constructor (game) {
    super(game, "City of Solitude", "Visions", "VIS");
  }
}

module.exports = CityofSolitude;
