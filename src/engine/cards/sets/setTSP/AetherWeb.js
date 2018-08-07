"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherWeb extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Web", "Time Spiral", "TSP");
  }
}

module.exports = AetherWeb;
