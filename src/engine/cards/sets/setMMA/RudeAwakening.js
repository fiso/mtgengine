"use strict";
const Constants = require ("../../../Constants");
const RudeAwakeningBase = require("../setGVL/RudeAwakening");

class RudeAwakening extends RudeAwakeningBase {
  constructor (game) {
    super(game, "Rude Awakening", "Modern Masters", "MMA");
  }
}

module.exports = RudeAwakening;
