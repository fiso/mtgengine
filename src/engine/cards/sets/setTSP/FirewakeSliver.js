"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirewakeSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Firewake Sliver", "Time Spiral", "TSP");
  }
}

module.exports = FirewakeSliver;
