"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MuscleSliverBase = require("../setpFNM/MuscleSliver.js");

class MuscleSliver extends MuscleSliverBase {
  constructor(game) {
    super(game, "Muscle Sliver", "Tempest Remastered", "TPR");
  }
}

module.exports = MuscleSliver;
