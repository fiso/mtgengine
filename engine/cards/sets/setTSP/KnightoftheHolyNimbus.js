"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightoftheHolyNimbus extends UnimplementedCard {
  constructor(game) {
    super(game, "Knight of the Holy Nimbus", "Time Spiral", "TSP");
  }
}

module.exports = KnightoftheHolyNimbus;
