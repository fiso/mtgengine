"use strict";
const Constants = require ("../../../Constants");
const SleepParalysisBase = require("../setW17/SleepParalysis");

class SleepParalysis extends SleepParalysisBase {
  constructor (game) {
    super(game, "Sleep Paralysis", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SleepParalysis;
