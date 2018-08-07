"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormWorld extends UnimplementedCard {
  constructor (game) {
    super(game, "Storm World", "Masters Edition III", "ME3");
  }
}

module.exports = StormWorld;
