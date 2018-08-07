"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SidewinderSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Sidewinder Sliver", "Time Spiral", "TSP");
  }
}

module.exports = SidewinderSliver;
