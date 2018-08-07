"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RumblingBaloth extends UnimplementedCard {
  constructor (game) {
    super(game, "Rumbling Baloth", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = RumblingBaloth;
