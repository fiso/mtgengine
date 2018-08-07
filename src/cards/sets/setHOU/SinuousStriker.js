"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SinuousStriker extends UnimplementedCard {
  constructor (game) {
    super(game, "Sinuous Striker", "Hour of Devastation", "HOU");
  }
}

module.exports = SinuousStriker;
