"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HollowOne extends UnimplementedCard {
  constructor (game) {
    super(game, "Hollow One", "Hour of Devastation", "HOU");
  }
}

module.exports = HollowOne;
