"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MuscleSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Muscle Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = MuscleSliver;
