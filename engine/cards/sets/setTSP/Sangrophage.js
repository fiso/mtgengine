"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sangrophage extends UnimplementedCard {
  constructor(game) {
    super(game, "Sangrophage", "Time Spiral", "TSP");
  }
}

module.exports = Sangrophage;
