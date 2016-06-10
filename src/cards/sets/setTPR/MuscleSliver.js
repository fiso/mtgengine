"use strict";
const Constants = require ("../../../Constants");
const MuscleSliverBase = require("../setpFNM/MuscleSliver");

class MuscleSliver extends MuscleSliverBase {
  constructor (game) {
    super(game, "Muscle Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = MuscleSliver;
