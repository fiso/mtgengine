"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OddlyUneven extends UnimplementedCard {
  constructor (game) {
    super(game, "Oddly Uneven", "Unstable", "UST");
  }
}

module.exports = OddlyUneven;
