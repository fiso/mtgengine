"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hivestone extends UnimplementedCard {
  constructor(game) {
    super(game, "Hivestone", "Time Spiral", "TSP");
  }
}

module.exports = Hivestone;
