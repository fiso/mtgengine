"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fertilid extends UnimplementedCard {
  constructor (game) {
    super(game, "Fertilid", "Battlebond", "BBD");
  }
}

module.exports = Fertilid;
