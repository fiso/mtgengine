"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunscourgeChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunscourge Champion", "Hour of Devastation", "HOU");
  }
}

module.exports = SunscourgeChampion;
