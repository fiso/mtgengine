"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YotianSoldier extends UnimplementedCard {
  constructor (game) {
    super(game, "Yotian Soldier", "Battlebond", "BBD");
  }
}

module.exports = YotianSoldier;
