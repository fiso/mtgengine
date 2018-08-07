"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranQuarry extends UnimplementedCard {
  constructor (game) {
    super(game, "Thran Quarry", "Magic Online Promos", "PRM");
  }
}

module.exports = ThranQuarry;
