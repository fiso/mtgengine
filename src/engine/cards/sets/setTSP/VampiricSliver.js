"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampiricSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampiric Sliver", "Time Spiral", "TSP");
  }
}

module.exports = VampiricSliver;
