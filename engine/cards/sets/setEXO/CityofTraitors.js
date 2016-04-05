"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CityofTraitors extends UnimplementedCard {
  constructor(game) {
    super(game, "City of Traitors", "Exodus", "EXO");
  }
}

module.exports = CityofTraitors;
