"use strict";
const Constants = require ("../../../Constants");
const RudeAwakeningBase = require("../setDD3_GVL/RudeAwakening");

class RudeAwakening extends RudeAwakeningBase {
  constructor (game) {
    super(game, "Rude Awakening", "Modern Masters", "MMA");
  }
}

module.exports = RudeAwakening;
