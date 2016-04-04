"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeightenedAwareness extends UnimplementedCard {
  constructor(game) {
    super(game, "Heightened Awareness", "Prophecy", "PCY");
  }
}

module.exports = HeightenedAwareness;
