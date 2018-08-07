"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DementiaSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Dementia Sliver", "Time Spiral", "TSP");
  }
}

module.exports = DementiaSliver;
