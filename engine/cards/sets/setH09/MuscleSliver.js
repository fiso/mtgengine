"use strict";
const Constants = require ("../../../Constants");
const MuscleSliverBase = require("../setpFNM/MuscleSliver");

class MuscleSliver extends MuscleSliverBase {
  constructor(game) {
    super(game, "Muscle Sliver", "Premium Deck Series: Slivers", "H09");
  }
}

module.exports = MuscleSliver;
