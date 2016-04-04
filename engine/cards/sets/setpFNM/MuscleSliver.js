"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MuscleSliver extends Card {
  constructor(game) {
    super(game, "Muscle Sliver", "Friday Night Magic", "pFNM");
  }
}

module.exports = MuscleSliver;
