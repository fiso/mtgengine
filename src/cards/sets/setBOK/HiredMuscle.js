"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HiredMuscle extends UnimplementedCard {
  constructor(game) {
    super(game, "Hired Muscle", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HiredMuscle;
