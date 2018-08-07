"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CentaurHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Centaur Healer", "Battlebond", "BBD");
  }
}

module.exports = CentaurHealer;
