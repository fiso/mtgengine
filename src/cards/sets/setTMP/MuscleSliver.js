"use strict";
const Constants = require ("../../../Constants");
const MuscleSliverBase = require("../setpFNM/MuscleSliver");

class MuscleSliver extends MuscleSliverBase {
  constructor (game) {
    super(game, "Muscle Sliver", "Tempest", "TMP");
  }
}

module.exports = MuscleSliver;
