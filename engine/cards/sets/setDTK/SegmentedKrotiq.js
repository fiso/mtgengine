"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SegmentedKrotiq extends UnimplementedCard {
  constructor(game) {
    super(game, "Segmented Krotiq", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SegmentedKrotiq;
