"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlatedPegasus extends UnimplementedCard {
  constructor(game) {
    super(game, "Plated Pegasus", "Time Spiral", "TSP");
  }
}

module.exports = PlatedPegasus;
