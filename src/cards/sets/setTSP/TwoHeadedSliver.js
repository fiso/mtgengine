"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwoHeadedSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Two-Headed Sliver", "Time Spiral", "TSP");
  }
}

module.exports = TwoHeadedSliver;
