"use strict";
const Constants = require ("../../../Constants");
const MuscleSliverBase = require("../setTPR/MuscleSliver");

class MuscleSliver extends MuscleSliverBase {
  constructor (game) {
    super(game, "Muscle Sliver", "Friday Night Magic 2003", "F03");
  }
}

module.exports = MuscleSliver;
