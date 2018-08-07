"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorbidCuriosity extends UnimplementedCard {
  constructor (game) {
    super(game, "Morbid Curiosity", "Battlebond", "BBD");
  }
}

module.exports = MorbidCuriosity;
