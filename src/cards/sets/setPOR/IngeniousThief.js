"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IngeniousThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Ingenious Thief", "Portal", "POR");
  }
}

module.exports = IngeniousThief;
