"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HourofDevastation extends UnimplementedCard {
  constructor (game) {
    super(game, "Hour of Devastation", "Hour of Devastation", "HOU");
  }
}

module.exports = HourofDevastation;
