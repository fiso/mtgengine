"use strict";
const Constants = require ("../../../Constants");
const MuscleSliverBase = require("../setTPR/MuscleSliver");

class MuscleSliver extends MuscleSliverBase {
  constructor (game) {
    super(game, "Muscle Sliver", "Magic Online Promos", "PRM");
  }
}

module.exports = MuscleSliver;
