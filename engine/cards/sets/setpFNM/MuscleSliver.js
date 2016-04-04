"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MuscleSliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Muscle Sliver", "Friday Night Magic", "pFNM");
  }
}

module.exports = MuscleSliver;
