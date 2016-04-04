"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlickeringSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Flickering Spirit", "Time Spiral", "TSP");
  }
}

module.exports = FlickeringSpirit;
