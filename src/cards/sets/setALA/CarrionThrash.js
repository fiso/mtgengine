"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionThrash extends UnimplementedCard {
  constructor(game) {
    super(game, "Carrion Thrash", "Shards of Alara", "ALA");
  }
}

module.exports = CarrionThrash;
