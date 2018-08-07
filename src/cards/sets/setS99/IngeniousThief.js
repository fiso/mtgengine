"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IngeniousThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Ingenious Thief", "Starter 1999", "S99");
  }
}

module.exports = IngeniousThief;
