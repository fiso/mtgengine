"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FiremawKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Firemaw Kavu", "Time Spiral", "TSP");
  }
}

module.exports = FiremawKavu;
