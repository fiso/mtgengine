"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrindDust extends UnimplementedCard {
  constructor (game) {
    super(game, "Grind // Dust", "Hour of Devastation", "HOU");
  }
}

module.exports = GrindDust;
