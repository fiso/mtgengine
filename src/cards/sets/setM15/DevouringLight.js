"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevouringLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Devouring Light", "Magic 2015 Core Set", "M15");
  }
}

module.exports = DevouringLight;
