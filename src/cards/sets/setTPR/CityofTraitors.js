"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CityofTraitors extends UnimplementedCard {
  constructor (game) {
    super(game, "City of Traitors", "Tempest Remastered", "TPR");
  }
}

module.exports = CityofTraitors;
