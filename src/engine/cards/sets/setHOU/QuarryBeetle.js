"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuarryBeetle extends UnimplementedCard {
  constructor (game) {
    super(game, "Quarry Beetle", "Hour of Devastation", "HOU");
  }
}

module.exports = QuarryBeetle;
