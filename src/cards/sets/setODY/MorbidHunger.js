"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorbidHunger extends UnimplementedCard {
  constructor (game) {
    super(game, "Morbid Hunger", "Odyssey", "ODY");
  }
}

module.exports = MorbidHunger;
