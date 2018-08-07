"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Thunder Totem", "Time Spiral", "TSP");
  }
}

module.exports = ThunderTotem;
