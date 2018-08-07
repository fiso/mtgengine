"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevouringLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Devouring Light", "Magic 2015", "M15");
  }
}

module.exports = DevouringLight;
