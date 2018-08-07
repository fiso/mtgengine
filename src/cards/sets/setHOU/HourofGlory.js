"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HourofGlory extends UnimplementedCard {
  constructor (game) {
    super(game, "Hour of Glory", "Hour of Devastation", "HOU");
  }
}

module.exports = HourofGlory;
