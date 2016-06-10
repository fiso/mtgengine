"use strict";
const Constants = require ("../../../Constants");
const RudeAwakeningBase = require("../setDD3_GVL/RudeAwakening");

class RudeAwakening extends RudeAwakeningBase {
  constructor (game) {
    super(game, "Rude Awakening", "Fifth Dawn", "5DN");
  }
}

module.exports = RudeAwakening;
