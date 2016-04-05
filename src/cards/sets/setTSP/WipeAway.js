"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WipeAway extends UnimplementedCard {
  constructor(game) {
    super(game, "Wipe Away", "Time Spiral", "TSP");
  }
}

module.exports = WipeAway;
