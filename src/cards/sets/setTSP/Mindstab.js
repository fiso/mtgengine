"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindstab extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindstab", "Time Spiral", "TSP");
  }
}

module.exports = Mindstab;
