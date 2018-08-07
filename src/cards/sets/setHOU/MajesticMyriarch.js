"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MajesticMyriarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Majestic Myriarch", "Hour of Devastation", "HOU");
  }
}

module.exports = MajesticMyriarch;
