"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CountervailingWinds extends UnimplementedCard {
  constructor (game) {
    super(game, "Countervailing Winds", "Hour of Devastation", "HOU");
  }
}

module.exports = CountervailingWinds;
