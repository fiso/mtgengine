"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HourofEternity extends UnimplementedCard {
  constructor (game) {
    super(game, "Hour of Eternity", "Hour of Devastation", "HOU");
  }
}

module.exports = HourofEternity;
