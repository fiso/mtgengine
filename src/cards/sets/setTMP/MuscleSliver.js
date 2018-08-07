"use strict";
const Constants = require ("../../../Constants");
const MuscleSliverBase = require("../setTPR/MuscleSliver");

class MuscleSliver extends MuscleSliverBase {
  constructor (game) {
    super(game, "Muscle Sliver", "Tempest", "TMP");
  }
}

module.exports = MuscleSliver;
